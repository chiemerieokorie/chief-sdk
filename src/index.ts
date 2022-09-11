import APIClient from '../src/APIClient'
import makeBook from "./entities/Book";

function LOTR({apiKey}: { apiKey: string; }) {
    const store = APIClient({token: apiKey})

    const SDK =  {
        get Book() {
            return makeBook<{ store: typeof store }>({store})
        }
    }

    //
    // const _addStoreToEntity = (entityMaker: any) => {
    //     return entityMaker<{ store: typeof store }>({store})
    // }

    const _addEntityToSDK = (entityName: string, entity: any) => {
        Object.defineProperty(SDK, entityName, {
            get: () => makeBook<{ store: typeof store }>({store})
        });
    }

    const addAllEntitiesToSDK = (entities: object) => {
        for(const entityName in entities) {
            _addEntityToSDK(entityName, entities[entityName])
        }
    }

    // addAllEntitiesToSDK(entities)
    return SDK


}


export default LOTR

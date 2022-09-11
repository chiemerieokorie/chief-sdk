import APIClient from '../src/APIClient'
import makeBook from "./entities/Book";
import makeChapter from "./entities/Chapter";
import makeCharacter from "./entities/Character";
import makeMovie from "./entities/Movie";
import makeQuote from "./entities/Quote";

function LOTR({apiKey}: { apiKey: string; }) {
    const store = APIClient({token: apiKey})

    const SDK =  {
        get Book() {
            return makeBook<{ store: typeof store }>({store})
        },
        get Chapter() {
            return makeChapter<{ store: typeof store }>({store})
        },
        get Character() {
            return makeCharacter<{ store: typeof store }>({store})
        },
        get Movie() {
            return makeMovie<{ store: typeof store }>({store})
        },
        get Quote() {
            return makeQuote<{ store: typeof store }>({store})
        },

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

import APIClient from '../src/APIClient'
import entities from '../src/entities'

function LOTR({apiKey}: { apiKey: string; }) {
    const store = APIClient({token: apiKey})

    const SDK = Object.create({})

    const _addStoreToEntity = (entityMaker: any) => {
        return entityMaker({store})
    }

    const _addEntityToSDK = (entityName: string, entity: object) => {
        Object.defineProperty(SDK, entityName, {
            get: () => _addStoreToEntity(entity)
        });
    }

    const _applyAllEntitiesToSDK = () => {
        for (const entityName in entities) {
            _addEntityToSDK(entityName, entities[entityName])
        }
    }

    _applyAllEntitiesToSDK()
    return SDK
}


export default LOTR

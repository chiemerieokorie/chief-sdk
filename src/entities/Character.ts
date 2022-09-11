import makeBase from "./Base";

// @ts-ignore
export default function makeCharacter<T>({store}: T) {
    const entity = 'character'
    const Base = makeBase({store})({entity})
    return Object.assign(Base, {
        getQuotes(id: number, params: any) {
            return store.get(`${entity}/${id}/quote`, params)
        }
    })
}


import makeBase from "./Base";

// @ts-ignore
export default function makeQuote<T>({store}: T) {
    const entity = 'movie'
    const Base = makeBase({store})({entity})
    return Object.assign(Base, {
        getQuotes(id: number, params: any) {
            return store.get(`${entity}/${id}/quote`, params)
        }
    })
}


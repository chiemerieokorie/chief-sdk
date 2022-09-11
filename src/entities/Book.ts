import makeBase from "./Base";

// @ts-ignore
export default function makeBook<T>({store}: T) {
    const entity = 'book'
    const Base = makeBase({store})({entity})
    return Object.assign(Base, {
        getChapters(id: number, params: any) {
            return store.get(`${entity}/${id}/chapter`, params)
        }
    })
}


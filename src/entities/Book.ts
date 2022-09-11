import makeBase from "./Base";

// @ts-ignore
export default function makeBook<T>({store}: T) {
    const Base = makeBase({store})({entity: 'book'})
    return Object.assign(Base, {
        getChapter(id: number, params: any) {
            return store.get(`book/${id}/chapter`, params)
        }
    })
}


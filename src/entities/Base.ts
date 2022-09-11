import {EntityType} from "../../types";

// @ts-ignore
export default function makeBase<T>({store}: T) {

    return function ({entity}: EntityType) {
        return {
            getAll (params?: object) {
                return store.get(`${entity}`, params)
            },
            getOne(id: number, params?: object) {
                return store.get(`${entity}/${id}`, params)
            }
        }
    }
}

interface IBase {
    getAll: (params?: object) => void;
}

import makeBase from "./Base";

// @ts-ignore
export default function makeChapter<T>({store}: T) {
    const entity = 'chapter'
    const Base = makeBase({store})({entity})
    return Object.assign(Base, {})
}


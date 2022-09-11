import makeBase from "./Base";

// @ts-ignore
export default function makeQuote<T>({store}: T) {
    const entity = 'quote'
    const Base = makeBase({store})({entity})
    return Object.assign(Base, {})
}


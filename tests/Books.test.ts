import LOTR_SDK from "../src";

describe('Book service tests', () => {

    const API_KEY = "0m0D4Nk3vHxibr1_4xgo"

    const sdk = LOTR_SDK({apiKey: API_KEY})


    test('get all books', async () => {
        const books = await sdk.Book.getAll({limit: 1})
        expect(books.docs.length).toBe(3);
    });
});

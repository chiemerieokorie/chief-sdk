import LOTR_SDK from "../src";

describe('Book service tests', () => {

    const API_KEY = process.env.AUTH_TOKEN

    const sdk = LOTR_SDK({apiKey: API_KEY})


    test('get all books', async () => {
        const books = await sdk.Book.getAll({limit: 1})
        expect(books.docs.length).toBe(3);
    });
    test('get all character', async () => {
        const books = await sdk.Character.getAll({limit: 1})
        console.log(books)
    });
    test('get all movie', async () => {
        const books = await sdk.Movie.getAll({limit: 1})
        console.log(books)
    });
    test('get all quote', async () => {
        const books = await sdk.Quote.getAll({limit: 1})
        console.log(books)
    });
    test('get all chapter', async () => {
        const books = await sdk.Chapter.getAll({limit: 1})
        console.log(books)
    });
});

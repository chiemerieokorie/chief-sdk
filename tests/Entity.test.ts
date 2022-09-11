import LOTR_SDK from "../src";

describe('Entity tests', () => {

    const API_KEY = process.env.AUTH_TOKEN

    const sdk = LOTR_SDK({apiKey: API_KEY})


    test('get all books', async () => {
        const books = await sdk.Book.getAll({limit: 1})
        expect(books.docs.length).toBe(1);
    });
    test('get all character', async () => {
        const characters = await sdk.Character.getAll({limit: 1})
        expect(characters.docs.length).toBe(1);
    });
    test('get all movie', async () => {
        const movies = await sdk.Movie.getAll({limit: 1})
        expect(movies.docs.length).toBe(1);
    });
    test('get all quote', async () => {
        const quotes = await sdk.Quote.getAll({limit: 1})
        expect(quotes.docs.length).toBe(1);
    });
    test('get all chapter', async () => {
        const chapters = await sdk.Chapter.getAll({limit: 1})
        expect(chapters.docs.length).toBe(1);
    });
});

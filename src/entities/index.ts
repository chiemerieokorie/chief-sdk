import makeBook from './Book'
import makeChapter from "./Chapter";
import makeCharacter from "./Character";
import makeQuote from "./Quote";
import makeMovie from './Movie'

const entities = {
    "Book": makeBook,
    "Chapter": makeChapter,
    "Character": makeCharacter,
    "Quote": makeQuote,
    "Movie": makeMovie
}

export default entities

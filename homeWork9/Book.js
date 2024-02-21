export default class Book {
    constructor (title, author, yearOfPublication){
        this._title = title
        this._author = author
        this._yearOfPublication = yearOfPublication
    }

    get title(){
        return this._title
    }
    set title(value){
        if (typeof value !== "string"){
            console.log ("Error: title must be a 'string'")
            return
        }

        if(value.length == 0){
            console.log("Error: title cannot be empty")
            return
        }

        if(value.charAt(0) === ' '){
            console.error("Error: title starts with spaces")
            return
        }

        this._title = value
    }

    get author(){
        return this._author
    }
    set author(value){
        if(typeof value !== 'string'){
            console.error("Error: author must be a 'string'")
            return
        }

        if(value.length == 0){
            console.error("Error: author cannot be empty")
            return
        }
       
        if(value.charAt(0) === ' '){
            console.error("Error: author starts with spaces")
            return
        }
        this._author = value

    }

    get yearOfPublication(){
        return this._yearOfPublication
    }

    set yearOfPublication(value){
        if(typeof value !== "number"){
            console.error("Error: year of publication must be a 'Number'")
            return
        }

        if(value === 0 ){
            console.error("Error: year of publication cannot be 0")
            return
        }

        if(value > 2024 ){
            console.error("Error: year of publication cannot be greater than 2024")
            return
        }
        this._yearOfPublication = value

    }

    static findOldestBook(books){
        const newBooks = books.slice()
        newBooks.sort((book1, book2) => book1.yearOfPublication - book2.yearOfPublication);
        return newBooks[0]
    }

    printInfo(){console.log(
        `The title of the book - '${this._title}',
        Author - '${this._author}',
        Year of publication - '${this._yearOfPublication}'`)
    }
}
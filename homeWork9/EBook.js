import Book from "./Book.js"

export default class EBook extends Book{
    constructor(title, author, yearOfPublication, fileFormat) {
        super(title, author, yearOfPublication)
        this._fileFormat = fileFormat
    }

    get fileFormat(){
        return this._fileFormat
    }

    set fileFormat(value){
        if (typeof value !== "string"){
            console.log ("Error: fileFormat must be a 'string'")
            return
        }
        this._title = value

        if(value.length == 0){
            console.log("Error: fileFormat cannot be empty")
            return
        }
        this._title = value

        if(value !== 'PDF' || 'TXT' || 'docx'){
            console.error("Error: fileFormat must be a 'PDF' or 'TXT' or 'docx' ")
            return
        }
        this._fileFormat = value
    }

    static bookAddFileFormat(book, fileFormat){
        return new EBook(book.title, book.author, book.yearOfPublication, fileFormat)
    }

   
    printInfo(){
        console.log(
            `The title of the book - '${this._title}',
            Author - '${this._author}',
            Year of publication - '${this._yearOfPublication}',
            FileFormat - '${this._fileFormat}'`)
    }
}   
import Book from "./Book.js"
import EBook from "./EBook.js"
 
const book1 = new Book("Screw It, Let's Do It", 'Richard Branson', 2006)
const book2 = new Book(`Kobzar`, 'Taras Shevchenko', 1840)
const book3 = new EBook('Romeo and Juliet', 'William Shakespeare', 1597, 'PDF')

book1.printInfo()
console.log("------------------")
book2.printInfo()
console.log("------------------")
book3.printInfo()
console.log("------------------")

const oldestBook = Book.oldBook([book1, book2, book3]);
console.log("The oldest book - ", oldestBook._title); 

console.log("------------------")

const addFormatfile = EBook.bookAddFileFormat(book2, 'TXT')
addFormatfile.printInfo(console.log('The book with file format from Book class :'))
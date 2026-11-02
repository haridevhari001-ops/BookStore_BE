const bookModel = require('../Models/bookModels')

// add a book:by  a user
exports.addBook = async (req, res) => {
    const { title, author, noOfPages, imageUrl, price, discount, abstract,
        publisher, language, isbn, category } = req.body
    const sellerMail = req.payload?.userMail
    const uploadImage = req.files.map(item => item.filename)
    console.log(title, author, noOfPages, imageUrl, price, discount, abstract,
        publisher, language, isbn, category, sellerMail, uploadImage,buyerMail)
    const existingBook = await bookModel.findOne({ sellerMail, isbn })
    if (existingBook) {
        res.status(400).json({ msg: "Book already exists" })
    }
    else {
        const newBook = await bookModel.create({
            title, author, noOfPages, imageUrl,
            price, discount, abstract, publisher, language, isbn, category, sellerMail, uploadImage
        })
        res.status(200).json(newBook)
    }
}


// latest books list:4 latest books
exports.latestBook = async (req, res) => {
    const latestBooklist = await books.find({ status: 'approved' })
    res.status(200).json(latestbooklist.slice(0, 4))
}

// list books:ignore books added by logined user
exports.bookList = async (req, res) => {
    const sellerMail = req.payload.userMail
    const booklist = await book.find({ sellerMail: { $ne: mail } })
    res.status(200).json(booklist)
}
// list user added books
exports.userAddedBooks = async (req,res)=>{
    const Mail = req.payload?.userMail
    const booklist = await books.find({ sellerMail:mail })
    res.status(200).json(booklist)
    
}

// remove book by user : before adminm approves it
exports.deleteAddedBook=async(req,res)=>{
    const{bid}=req.params
    const deletedBook=await books.findByIdAndDelete(bid)
    res.status(200).json(deletedBook)
}

// purchased books
exports.purchasedBookList = async (req, res) => {
    const mail = req.payload?.userMail
    const purchasedBookList = await books.find({ buyerMail: mail })
    res.status(200).json(purchasedBookList)
}
// view purchabook details : details of a specific book
exports.getBookById=async(req,res)=>{
    const {bid}=req.params
    const bookDetails=await books.findById(bid)
    res.status(200).json(bookDetails)
}

// get all books : admin

// update book status :admin approval

// book payment
// bookDetails.status="sold"
// bookDetail.buyerMail = buyerMail
// await bookDetails.save()
// create strioe checkout session
const line_item = [{
    price_data:{
        currency:"usd",
        product_data:{
            name:bookDetails.title,
            description: `${bookDetails.author}-${bookDetails.publisher}`,
            images:bookDetails.uploadImage,
            metadata:{
                title:bookDetails.title,author:bookDetails.author,
                
            }
        }
    }
}]
const session = await stripe.checkout.sessions.create({
    success_url:'htpp://localhost:5173/success',
    cancel_url:'http://localhost:5173/failed',
    line_items,
    mode:'payment',
    allowerd_payment_method_types:['card']
})
console.log(session)
res.status(200).json(session)
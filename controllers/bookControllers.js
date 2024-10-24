const Book = require("../models/Book")
const Category = require("../models/Category")
const Chapter = require("../models/Chapter")
const Hadith = require("../models/Hadith")
const HadithForCategory = require("../models/HadithForCategory")
const Section = require("../models/Section")
const Validity = require("../models/Validity")
const Writer = require("../models/Writer")

exports.getHomeData = async (req, res, next) => {
    try {
        const books = await Book.find({}).sort({ id: 1 })
        const hadithForCat = await HadithForCategory.find({})
        const findcategories = await Category.find({}).sort({ id: 1 })
        const categories = []
        findcategories.forEach(category => {
            const findHadith = hadithForCat.filter(item => item.cat_id === category.id).length
            categories.push({
                ...category._doc,
                number_of_hadis: findHadith
            })
        })

        res.status(200).json({
            success: true,
            status: 200,
            message: 'Books found',
            data: {
                books,
                categories
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}
exports.getBookChapters = async (req, res, next) => {
    try {

        const chapters = await Chapter.find({ book_id: req.params.id }).sort({ chapter_id: 1 })

        res.status(200).json({
            success: true,
            status: 200,
            message: 'Chapters found',
            data: chapters
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}

exports.getHadithByChapter = async (req, res, next) => {
    try {

        const sections = await Section.find({ book_id: req.params.id, chapter_id: req.params.chapterId }).sort({ id: 1 })

        const data = []

        await Promise.all(
            sections.map(async (section) => {
                const hadiths = await Hadith.find({ book_id: req.params.id, chapter_id: req.params.chapterId, section_id: section.section_id })
                data.push({
                    ...section._doc, hadiths
                })
            })
        )

        data.sort((a, b) => a.id - b.id)

        res.status(200).json({
            success: true,
            status: 200,
            message: 'Hadiths found',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}

exports.getAllBooks = async (req, res, next) => {
    try {
        Book.find()
        Category.find()
        Chapter.find()
        // const books = await Book.find({})
        // res.status(200).json({
        //     success : true,
        //     status : 200,
        //     message : 'Books found',
        //     data : books
        // })
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}

exports.goToHadith = async (req, res, next) => {
    try {
        const hadith = await Hadith.findOne({ book_id: req.params.bookId, hadith_id: req.params.hadithId })
        
        const chapter = await Chapter.findOne({ chapter_id: hadith.chapter_id })
        
        const section = await Section.findOne({ chapter_id: hadith.chapter_id })
        
        res.status(200).json({
            success: true,
            status: 200,
            message: 'Hadiths found',
            data: {
                chapter,
                section,
                hadith
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}

exports.searchHadith = async (req, res, next) => {
    try {
        const { q, book_id, chap_id, page_no } = req.query

        if (q.length > 0 & book_id != 'null' & chap_id != 'null') {

            const query = {
                book_id: book_id ? parseInt(book_id) : { $exists: true },
                chapter_id: chap_id ? parseInt(chap_id) : { $exists: true },
                bn: { $regex: q, $options: 'i' },
            }

            const count = await Hadith.countDocuments(query)

            const hadiths = await Hadith.find(query)

            const data = []

            await Promise.all(
                hadiths.map(async (hadith) => {
                    const book = await Book.findOne({ id: hadith.book_id })
                    data.push({
                        ...hadith._doc, book
                    })
                })
            )

            res.status(200).json({
                success: true,
                status: 200,
                message: 'Hadiths found',
                total : count,
                data: data
            })
            
        } else if (q.length > 0 & page_no != 'null') {
            const query = {
                bn: { $regex: q, $options: 'i' }
            }
            const count = await Hadith.countDocuments(query)

            const page = Number(page_no)

            const hadiths = await Hadith.find(query)
            .skip(10 * (page-1))
            .limit(10)
            
            const data = []

            await Promise.all(
                hadiths.map(async (hadith) => {
                    const book = await Book.findOne({ id: hadith.book_id })
                    data.push({
                        ...hadith._doc, book
                    })
                })
            )

            res.status(200).json({
                success: true,
                status: 200,
                message: 'Hadiths found',
                total : count,
                data: data
            })
        } else{
            const query = {
                bn: { $regex: q, $options: 'i' }
            }
            const count = await Hadith.countDocuments(query)

            const hadiths = await Hadith.find(query).limit(10)

            const data = []

            await Promise.all(
                hadiths.map(async (hadith) => {
                    const book = await Book.findOne({ id: hadith.book_id })
                    data.push({
                        ...hadith._doc, book
                    })
                })
            )

            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Hadiths found',
                total : count,
                data: data
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}

exports.getWritters = async (req, res, next) => {
    try {
        const writers = await Writer.find({})
        writers.sort((a,b)=> a.id - b.id)

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Books found',
            data : writers
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}

exports.getValidities = async (req, res, next) => {
    try {
        const Validities = await Validity.find({})
        Validities.sort((a,b)=> a.id - b.id)

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Books found',
            data : Validities
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message,
            data: {}
        })
    }
}
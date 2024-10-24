const Book = require("../models/Book")
const Hadith = require("../models/Hadith")
const HadithForCategory = require("../models/HadithForCategory")
const SubCategory = require("../models/SubCategory")

exports.getSubCategories = async(req, res, next) => {
    try {
        const data = await SubCategory.find({cat_id : req.params.id})
        console.log(data)
        res.status(200).json({
            success : true,
            status : 200,
            message : 'Books found',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
            data : {}
        })
    }
}

exports.getSubCategoriesHadith = async(req, res, next) => {
    try {
        const hadithForCategory = await HadithForCategory.find({cat_id : req.params.catId, subcat_id : req.params.subCatId})
        
        const data = []

        await Promise.all(
            hadithForCategory.map(async(section)=>{
                const  hadith = await Hadith.findOne({book_id: section.book_id , hadith_id : section.hadith_bn})
                const book  = await Book.findOne({id : hadith.book_id})
                data.push(
                    {...hadith._doc, book}
                )
            })
        )

        data.sort((a,b)=> a.id - b.id)
        res.status(200).json({
            success : true,
            status : 200,
            message : 'Books found',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
            data : {}
        })
    }
}

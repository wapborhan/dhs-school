const { getSubCategories, getSubCategoriesHadith } = require('../controllers/subjectControllers')

const router = require('express').Router()

router.get('/:id',getSubCategories)
    .get('/:catId/:subCatId',getSubCategoriesHadith)
    
module.exports = router
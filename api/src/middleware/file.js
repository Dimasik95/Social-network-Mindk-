const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'avatar/')
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.minetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer(upload, fileFilter)
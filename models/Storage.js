const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "mongodb://casataramelli.duckdns.org:27017/test")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })
const uploadStorage = multer({ storage: storage })
module.exports = uploadStorage;
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname
      console.log(req.file);
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = upload;
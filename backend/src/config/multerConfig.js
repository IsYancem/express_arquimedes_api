// src/config/multerConfig.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../photo_theory'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = req.body.id + '_' + file.fieldname + path.extname(file.originalname);
        cb(null, uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
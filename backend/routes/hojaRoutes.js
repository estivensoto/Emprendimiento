const express = require("express");
const router = express.Router();
const multer = require("multer");
const hojaController = require("../controllers/hojaController");
const auth = require("../middleware/auth");

// Configuración de multer
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

router.post("/guardar", auth, upload.single("archivo"), hojaController.guardarHoja);

module.exports = router;

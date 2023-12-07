import multer from "multer";
import fs from "fs-extra";
import { v4 } from "uuid";
import path from "path";
import { __dirname } from "../libs/dirname.js";

const storage = () =>
  multer.diskStorage({
    destination: async function (req, file, cb) {
      try {
        const userFolder = path.join(__dirname, "../public/media/");
        await fs.ensureDir(userFolder);
        cb(null, userFolder);
      } catch (err) {
        cb(err);
      }
    },
    filename: function (req, file, cb) {
      const uniqueFileName = v4() + path.extname(file.originalname);
      cb(null, uniqueFileName);
    },
  });

const fileFilter = () => (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const upload = () =>
  multer({
    storage: storage(),
    fileFilter: fileFilter(),
  });

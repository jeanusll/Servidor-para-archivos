import { upload } from "../middlewares/multer.middleware.js";
import { Router } from "express";

import { uploadFile } from "../controllers/multer.controller.js";

const router = Router();

router.post("/", upload().single("media"), uploadFile);

export default router;

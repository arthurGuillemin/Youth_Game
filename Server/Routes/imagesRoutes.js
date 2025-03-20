import express from "express";
import ImageController from "../Controllers/imagesController.js";

const router = express.Router();

router.get("/:filename", ImageController.getImageUrl);

export default router;

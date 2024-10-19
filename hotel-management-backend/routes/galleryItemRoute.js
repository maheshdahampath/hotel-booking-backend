import express from 'express';
import { createGalleryItem, getGalleryItems } from '../controllers/galleryItemController.js';

const galleryItemRouter = express.Router();

// Route to create a new gallery item
galleryItemRouter.post("/", createGalleryItem);

// Route to get all gallery items
galleryItemRouter.get("/", getGalleryItems);

export default galleryItemRouter;

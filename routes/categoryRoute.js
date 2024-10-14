import express from 'express'
import { createCategory, updateCategory } from '../controllers/categoryController.js';
import { deleteCategory } from '../controllers/categoryController.js';
import { getCategory } from '../controllers/categoryController.js';
import { getCategoryByName } from '../controllers/categoryController.js';


const categoryRouter = express.Router();

categoryRouter.post("/",createCategory);

categoryRouter.delete("/:name",deleteCategory);

categoryRouter.get("/",getCategory);

categoryRouter.get("/:name",getCategoryByName);

categoryRouter.put("/:name",updateCategory);




export default categoryRouter;
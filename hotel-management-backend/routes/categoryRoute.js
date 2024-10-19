import express from 'express';
import {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getCategoryByName,
} from '../controllers/categoryController.js';

const categoryRouter = express.Router();

// Create a new category
categoryRouter.post('/', createCategory);

// Delete a category by name
categoryRouter.delete('/:name', deleteCategory);

// Get all categories
categoryRouter.get('/', getCategory);

// Get a specific category by name
categoryRouter.get('/:name', getCategoryByName);

// Update a specific category by name
categoryRouter.put('/:name', updateCategory);

export default categoryRouter;

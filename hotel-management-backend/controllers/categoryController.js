import Category from "../models/category.js";
import { isAdminValid } from "./userControllers.js";

export function createCategory(req, res) {
    if (!req.user) {
        return res.status(401).json({
            message: "Sign in Again"
        });
    }

    if (req.user.type !== "admin") {
        return res.status(403).json({
            message: "You are not an admin"
        });
    }

    const newCategory = new Category(req.body);
    newCategory.save().then(result => {
        res.json({
            message: "Category Created",
            result: result
        });
    }).catch(err => {
        res.json({
            message: "Category Creation failed",
            error: err
        });
    });
}

export function deleteCategory(req, res) {
    if (!req.user) {
        return res.status(401).json({
            message: "Sign in Again"
        });
    }

    if (req.user.type !== "admin") {
        return res.status(403).json({
            message: "You are not an admin"
        });
    }

    const name = req.params.name;

    Category.findOneAndDelete({ name: name }).then(() => {
        res.json({
            message: "Category Deleted"
        });
    }).catch(() => {
        res.json({
            message: "Category not Deleted"
        });
    });
}

export function getCategory(req, res) {
    Category.find().then(result => {
        res.json({
            category: result
        });
    }).catch(() => {
        res.json({
            message: "Category not Found"
        });
    });
}

export function getCategoryByName(req, res) {
    const name = req.params.name;

    Category.findOne({ name: name }).then(result => {
        if (!result) {
            return res.json({
                message: "Category not Found"
            });
        }

        res.json({
            category: result
        });
    }).catch(() => {
        res.json({
            message: "Failed to get Category"
        });
    });
}

export function updateCategory(req, res) {
    if (!isAdminValid(req)) {
        return res.status(403).json({
            message: "Sign in again"
        });
    }

    const name = req.params.name;

    Category.updateOne({ name: name }, req.body).then(result => {
        if (name.length === 0) {
            return res.json({
                message: "Category not found or no changes made"
            });
        }

        res.json({
            message: "Category Updated"
        });
    }).catch(() => {
        res.json({
            message: "Category not Updated"
        });
    });
}

import GalleryItem from "../models/galleryItem.js";

export function createGalleryItem(req, res) {
    const user = req.user;

    if (!user) {
        return res.status(403).json({
            message: "Please login to create a gallery item"
        });
    }

    if (user.type !== "admin") {
        return res.status(403).json({
            message: "You are not an Admin"
        });
    }

    const galleryItem = req.body;
    const newGalleryItem = new GalleryItem(galleryItem);

    newGalleryItem.save().then(() => {
        res.json({
            message: "Gallery Item created successfully"
        });
    }).catch((error) => {
        console.error("Gallery Item creation error:", error);
        res.status(500).json({ message: "Gallery Item creation failed", error: error.message });
    });
}

export function getGalleryItems(req, res) {
    GalleryItem.find().then((list) => {
        res.json({
            list: list
        });
    }).catch((error) => {
        console.error("Error fetching gallery items:", error);
        res.status(500).json({ message: "Failed to retrieve gallery items", error: error.message });
    });
}

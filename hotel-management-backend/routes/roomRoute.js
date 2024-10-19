import express from 'express';
import { 
    createRoom, 
    deleteRoom, 
    getRoom, 
    getRoomByCategory, 
    getRoomById, 
    updateRoom 
} from '../controllers/roomController.js';

const roomRouter = express.Router();

// Route to create a new room
roomRouter.post("/", createRoom);

// Route to delete a room by ID
roomRouter.delete("/:roomId", deleteRoom);

// Route to get all rooms
roomRouter.get("/", getRoom);

// Route to get a room by its ID
roomRouter.get("/:roomId", getRoomById);

// Route to get rooms by category
roomRouter.get("/getByCategory/:category", getRoomByCategory);

// Route to update a room by ID
roomRouter.put("/:roomId", updateRoom);

export default roomRouter;

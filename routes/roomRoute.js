import express from 'express'

import { createRoom,deleteRoom,getRoom,getRoomByCategory,getRoomById,updateRoom } from '../controllers/roomController.js'

const roomRouter = express.Router();

roomRouter.post("/",createRoom);
roomRouter.delete("/:roomId",deleteRoom);
roomRouter.get("/",getRoom);
roomRouter.get("/:roomId",getRoomById);
roomRouter.get("/getByCategory/:category",getRoomByCategory);
roomRouter.put("/:roomId",updateRoom);

export default roomRouter;
import express from 'express'

import { createRoom,deleteRoom,getRoom,getRoomById,updateRoom } from '../controllers/roomController.js'

const roomRouter = express.Router();

roomRouter.post("/",createRoom);
roomRouter.delete("/:roomId",deleteRoom);
roomRouter.get("/",getRoom);
roomRouter.get("/:roomId",getRoomById);
roomRouter.put("/:roomId",updateRoom);

export default roomRouter;
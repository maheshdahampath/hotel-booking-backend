import express from 'express'

import { createRoom,deleteRoom,getRoom,getRoomById } from '../controllers/roomController'

const roomRouter = express.Router();

roomRouter.post("/",createRoom);
roomRouter.delete("/",deleteRoom);
roomRouter.get("/",getRoom);
roomRouter.get("/",getRoomById);

export default roomRouter;
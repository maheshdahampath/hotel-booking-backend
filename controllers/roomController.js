import Room from "../models/room.js";
import { isAdminValid } from "./userControllers.js";

export function createRoom(req,res)
{
    if(!isAdminValid(req))
    {
        res.status(403).json({
            message : "Sign in Again"
        })
    }

    const newRoom = new Room(req.body)
    newRoom.save().then(
        (result)=>{
            res.json({
                message : "Room Created",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Room not Created",
                error : err
            })
        }
    )
}


export function deleteRoom(req,res)
{
    if(!isAdminValid)
    {
        res.status(403).json({
            message : "Sign in Again"
        })
        return
    }

    const roomId = req.params.roomId

    Room.findOneAndDelete({
        roomId : roomId
    }).then(
        ()=>{
           res.json({
            message : "Room Deleted"
           })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Room not Deleted"
            })
        }
    )
}

export function getRoomById(req,res){
    const roomId = req.params.roomId;
    Room.findOne({roomId:roomId}).then(
    (result)=>{
       if(result==null)
       {
        res.json({
            message : "Room not Found"
        })
       }
    
       else
       {
        res.json({
            room : result
        })
       }
    }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to get Room"
            })
        }
    )
    }

    export function getRoomByCategory(req,res){
        const category = req.params.category;
        Room.findOne({category:category}).then(
        (result)=>{
           if(result==null)
           {
            res.json({
                message : "Room not Found"
            })
           }
        
           else
           {
            res.json({
                room : result
            })
           }
        }
        ).catch(
            ()=>{
                res.json({
                    message : "Failed to get Room"
                })
            }
        )
        }

    export function getRoom(req,res){
        Room.find().then(
            (result)=>{
                res.json({
                    Room : result
                })
            }
        ).catch(
            ()=>{
                res.json({
                    message : "Room not Found"
                })
            }
        )
    }


export function updateRoom(req,res)
{
if(!isAdminValid(req))
{
    res.json({
        message : "Sign in again"
    })
    return
}

const roomId = req.params.roomId;

Room.updateOne({roomId : roomId}, req.body).then(
    ()=>{
        res.json({
            message : "Room Updated"
        })
    }
).catch(
    ()=>{
        res.json({
            message : "Room not Created"
        })
    }
)
}
import Room from "../models/room";
import { isAdminValid } from "./userControllers";

export function createRoom(req,res)
{
    if(!isAdminValid)
    {
        res.status(403).json({
            message : "Sign in Again"
        })
    }

    const newRoom = newRoom(req.body)
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
            Room : result
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
                    category : result
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

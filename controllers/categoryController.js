import Category from "../models/category.js";

export function createCategory(req,res)
{
    if(req.user==null)
    {
        res.status(401).json(
            {
                message : "Sign in Again"

            }
        )
        return
    }

    if(req.user.type!="admin")
        {
            res.status(401).json(
                {
                    message : "You are not an admin"
    
                }
            )
        return
        }

    const newCategory = new Category(req.body)
    newCategory.save().then(
        (result)=>{
            res.json({
                message : "Category Created",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Category Creation failed",
                error : err
            })
        }
    )
}

export function deleteCategory(req,res)

{
    if(req.user==null)
        {
            res.status(401).json(
                {
                    message : "Sign in Again"
                }
            )
            return
        }
    
        if(req.user.type!="admin")
            {
                res.status(401).json(
                    {
                        message : "You are not an admin"
                    }
                )
            return
            }


    const name = req.params.name

    Category.findOneAndDelete({
        name : name
    }).then(
        ()=>{
           res.json({
            message : "Category Deleted"
           })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Category not Deleted"
            })
        }
    )
}

export function getCategory(req,res){
    Category.find().then(
        (result)=>{
            res.json({
                category : result
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Category not Found"
            })
        }
    )
}


export function getCategoryByName(req,res){
const name = req.params.name;
Category.findOne({name:name}).then(
(result)=>{
   if(result==null)
   {
    res.json({
        message : "Category not Found"
    })
   }

   else
   {
    res.json({
        category : result
    })
   }
}
).catch(
    ()=>{
        res.json({
            message : "Failed to get Category"
        })
    }
)
}



export function updateCategory(req,res)
{
if(!isAdminValid(req))
{
    res.json({
        message : "Sign in again"
    })
    return
}

const name = req.params.name;

Category.updateOne({name : name}, req.body).then(
    ()=>{
        res.json({
            message : "Category Updated"
        })
    }
).catch(
    ()=>{
        res.json({
            message : "Category not Created"
        })
    }
)
}
















function isAdminValid(req)
{
    if(req.user==null)
        {
        return false;
        }
    
    if(req.user.type!="admin")
        {
        return true;
        }
    return true
}
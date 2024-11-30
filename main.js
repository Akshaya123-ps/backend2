const express = require("express")//importing express to a variable
require("./connect")

var StudentModel=require("./models/student")
var std= express(); //initialize to app

std.use(express.json());

std.post("/add",async(req,res)=>
{
    try {
       await StudentModel(req.body).save()
       res.send("data added")
    } catch (error) {
      console.log(error);
    }
})
std.get("/see",async(req,res)=>
    {
        try {
            app =  await  StudentModel.find()
          
           res.send(app)
        } catch (error) {
          console.log(error);
        }
    })
    std.delete("/del/:id",async(req,res)=>
        {
            try {
                 await  StudentModel.findByIdAndDelete(req.params.id)
              
               res.send("delete successfully")
            } catch (error) {
              console.log(error);
            }
        })
        std.put("/update/:id",async(req,res)=>
            {
                try {
                     await  StudentModel.findByIdAndUpdate(req.params.id,req.body)
                  
                   res.send(" successfully")
                } catch (error) {
                  console.log(error);
                }
            })
        
            
   
std.listen(2005,() =>{
    console.log("port is running")
})  //port setting


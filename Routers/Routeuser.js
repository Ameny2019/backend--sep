const routeuser = require ("express").Router(); //importer fonction Router() de express
const userController=require("../Controllers/userController"); // importer de path user controller

routeuser.post("/CreateUser",userController.CreateUser)  // ajouter un nouveau path pour utiliser dans thinder client

routeuser.get("/GetallUsers",userController.GetAllUsers)  
routeuser.put("/UpdateUser/:id",userController.UpdateUser) 
routeuser.delete("/deleteUser/:id",userController.DeleteUser)
routeuser.get("/GetUserById/:id",userController.GetUserByID)  



module.exports =routeuser
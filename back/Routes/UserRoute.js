const UserRouter = require('express').Router();
const userController = require("../Controllers/UserController.js");

UserRouter.get("/allUsers",userController.getUsers);
UserRouter.post("/addUser",userController.addUser);
UserRouter.delete("/deleteUser/:UserID",userController.deleteUser);
UserRouter.get('/getOneUser/:UserID',userController.getOneUser)

module.exports = UserRouter;
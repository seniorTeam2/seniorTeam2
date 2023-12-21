const UserRouter = require('express').Router();
const userController = require("../Controllers/UserController.js");

UserRouter.get("/allUsers",userController.getUsers);
UserRouter.get('/getOneUser/:UserID',userController.getOneUser)
UserRouter.post("/addUser",userController.addUser);
UserRouter.delete("/deleteUser/:UserID",userController.deleteUser);

module.exports = UserRouter;
import express from "express";
import { registerController, loginController, forgotPasswordController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//Login
router.post("/login", loginController);

// Forget Password
router.post("/forgot-password", forgotPasswordController)

//test route
router.get('/test', requireSignIn, isAdmin, testController);

//protected User Route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

//protected Admin Route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router;
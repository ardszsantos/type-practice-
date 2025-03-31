import express from "express";
import PetController from "../controller/PetController";

const router = express.Router();


const petController = new PetController();

router.post("/", petController.criaPet.bind(petController));
router.get("/", petController.listaPets.bind(petController));
router.put("/:id", petController.atualizaPet.bind(petController));
router.delete("/:id", petController.deletaPet.bind(petController));



export default router
import express from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { AppDataSource } from "../config/dataSource";

const router = express.Router();

const petRepository = new PetRepository(AppDataSource.getRepository("PetEntity"));
const petController = new PetController(petRepository);

router.post("/", (req, res) => petController.criaPet(req, res) as any);
router.get("/",(req, res) => petController.listaPets(req, res) as any);
router.put("/:id",(req, res) => petController.atualizaPet(req, res) as any);
router.delete("/:id",(req, res) => petController.deletaPet(req, res) as any);



export default router
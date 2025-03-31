import { Request, Response } from "express";
import petType from "../types/petType";
import EnumEspecie from "../enum/EnumEspecie";

let listaDePets: Array<petType>= [];

let id = 0;
function geraId() {
    id = id + 1;
    return id;
}



export default class PetController {
    criaPet(req: Request, res: Response){
        const {adotado, dataDeNascimento, especie, nome} = <petType>req.body;
        if(!Object.values(EnumEspecie).includes(especie)) {
            return res.status(400).json({   error: "Especie inválida"   })
        }
        

        const novoPet:petType = {adotado, id:geraId(), dataDeNascimento, especie, nome}

        listaDePets.push(novoPet);
        return res.status(201).json(novoPet);
    }

    listaPets(req: Request, res: Response) {
        return res.status(200).json(listaDePets);
    }

    atualizaPet(req: Request, res: Response) {
        const { id } = req.params;
        const { adotado, especie, dataDeNascimento, nome } = req.body as petType;
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if(!pet) {
            return res.status(404).json({   erro: "Pet não encontrado"  });
        }

        pet.nome = nome;
        pet.dataDeNascimento = dataDeNascimento;
        pet.especie = especie;
        pet.adotado = adotado;
        return res.status(200).json(pet);
    }

    deletaPet(req: Request, res: Response) {
        const { id } = req.params;
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if(!pet) {
            return res.status(404).json({  erro: "Pet não encontrado"});
        }
        const index = listaDePets.indexOf(pet);
        listaDePets.splice(index, 1);
        return res.status(200).json({  mensagem: "Pet deletado com sucesso"  });
    }
    
}
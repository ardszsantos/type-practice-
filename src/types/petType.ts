import EnumEspecie from "../enum/EnumEspecie";

type petType={
    id:number;
    nome:string;
    especie:EnumEspecie;
    adotado:boolean;
    dataDeNascimento:Date;
}

export default petType;
// InterfaceAdotanteRepository.ts
import AdotanteEntity from "../../entities/AdotanteEntity";

export default interface InterfaceAdotanteRepository {
   criaAdotante(adotante: AdotanteEntity): void | Promise<void>;
  // ...outros métodos existentes
}

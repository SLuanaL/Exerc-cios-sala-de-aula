import { pessoa } from "./pessoa";

export class pessoaFisica extends pessoa {
  public cpf: string;

  constructor(nome, endereco, cpf) {
    super(nome, endereco);
    this.cpf = cpf;
  }

  mostrarCPF() {}
}

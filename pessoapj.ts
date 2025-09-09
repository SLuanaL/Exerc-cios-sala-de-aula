import { pessoa } from "./pessoa";

export class pessoaJuridica extends Pessoa {
  public cnpj: string;

  constructor(nome, endereco, cnpj) {
    super(nome, endereco);
    this.cnpj = cnpj;
  }

  mostrarCNPJ() {}

}

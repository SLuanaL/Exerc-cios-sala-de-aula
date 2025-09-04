class cachorro {
 public cor : String
 public raça : String
 public tamanho : Number
 public peso: Number
 public sexo : String
 public idade: Number

 constructor(cor, raca, tamanho, peso, sexo, idade)
 this.cor = cor;
 this.raça = raca;
 this.tamanho = tamanho;
 this.peso = peso;
 this.sexo = sexo;
 this.idade = idade;


latir (){
    console.log("Au,Au")

}
comer (){
    console.log("nham,nham")

}
dormir (){
    console.log("Zzz,Zzz")

}
brincar (){

}
chorar (){

}
pular (){
    
}
}
const cachorro = new cachorro("caramelo", "vira-lata", "médio", "20", "macho, "5")
    console.log(cachorro.cor)
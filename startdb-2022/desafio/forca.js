class Forca {
  constructor(Palavra){
    this.Palavra = Array.from(Palavra); //Array.from é o responsável por separar a Palavra coletada e transformar em um array
    this.ArrayGame =[];
    this.letrasChutadas= [];
    this.vidas= 6;
    this.contador=0;

    while(this.contador<=this.Palavra.length-1){
      this.contador++;
      this.ArrayGame.push("_")
      
    }}// coleta array Palavra e converte tudo em "_", que será necessário para apresentar o jogo e em seguida joga no ArrayGame

   
  chutar(letra) {    
    let indice = [];
  this.Palavra.filter ((elementos, index)=>{
      if (elementos === letra){
        indice.push(index)
      }// Filter responsável por passar o index da letra selecionada para variável indice
    });
    indice.map((posicao)=>{

      return this.ArrayGame[posicao] = letra;

    }) // Mapeia os elementos do indice, e joga a letra  na variavel ArrayGame, já na posicao indicada
    this.letrasChutadas.push(letra)// joga a letra no array letrasChutadas

    let TestarChute = this.ArrayGame.includes(letra);
    if(TestarChute===false){
      this.vidas--;
    }
  
  } //Se o parametro não existir diminui o número de vidas

  buscarEstado() {
    
    if(JSON.stringify(this.Palavra)==JSON.stringify(this.ArrayGame)){//verifica se um array é igual o outro
    return "ganhou";
    }if(this.vidas===0 ){//verifica se as vidas se esgotaram
      return "perdeu";
    }
  }

  buscarDadosDoJogo() {
    
      return {
          letrasChutadas: this.letrasChutadas,
          vidas: this.vidas, 
          Palavra: this.ArrayGame
      }
  }
}
module.exports = Forca;

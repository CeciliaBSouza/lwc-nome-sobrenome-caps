import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
 
  @track nome;
  @track sobrenome;
  nomeMin;

  Nome (event){
    this.nome=event.target.value.toUpperCase();
 
    
  }
  Sobrenome (event){
    this.sobrenome=event.target.value.toUpperCase();
   

  }


}

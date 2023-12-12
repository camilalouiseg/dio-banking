import { DioAccount } from "./DioAccount"

export class PremiumAccount extends DioAccount{

    constructor( name:string, accountNumber:number, balance:number){
        super(name, accountNumber, balance)
    }

    deposit = (value:number)=>{
        if(this.validateStatus()){
         this.balance = this.balance + value + 10
         console.log( `Voce depositou ${value} e seu saldo é ${this.balance}`);
        }else {
         console.log('Não foi possível fazer um depósito.');
        }
     }
}
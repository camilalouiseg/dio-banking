import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{

    constructor(name:string, accountNumber:number, balance:number){
        super(name, accountNumber, balance)
    }

    getLoan =(value:number) =>{
        if(this.validateStatus()){
            this.balance= this.balance + value
            console.log(`Voce pegou um emprestimo de ${value}`)
        }else{
            console.log(`Não foi possível realizar um emprestimo`)
        }
    }

    deposit =():number => {
        console.log('A empresa depositou')
        return 2
    }
}
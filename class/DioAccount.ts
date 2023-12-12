export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    balance:number
    private status: boolean = true

    constructor(name:string, accountNumber: number, balance:number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = balance
    }

    setName =(name:string):void => {
        name = this.name
        console.log('Nome alterado com sucesso');
    }

    deposit = (value:number)=>{
       if(this.validateStatus()){
        this.balance = this.balance + value
        console.log( `Voce depositou ${value}`);
       }else {
        console.log('Não foi possível fazer um depósito.');
       }
    }

    withdraw = (value:number) =>{
        if(this.validateStatus()){
            if(this.balance > value){
                this.balance = this.balance - value
                console.log( `Voce sacou ${value}`);
            }else{
                console.log( `Não foi possível sacar`);
            }
        }
    }

    getBalance = ():void => {
        console.log(this.balance);
    }

    validateStatus = ():boolean =>{
        if(this.status){
            return this.status
        }
        throw new Error('Conta invalida')
    }
}
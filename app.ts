//DIO Banking

import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Camila', 10,0)
console.log(peopleAccount.getBalance())
peopleAccount.deposit(10)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(10)
console.log(peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20,0)
companyAccount.getLoan(100)

const premiumAccount: PremiumAccount = new PremiumAccount('Carlos',23,0)
premiumAccount.deposit(100)
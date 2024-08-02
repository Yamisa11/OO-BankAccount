import { expect } from 'chai';
import BankAccount from '../src/BankAccount';

describe('BankAccount', () => {
    it('should create a new bank account with a given balance', () => {
        const account = new BankAccount(1000);
        expect(account.getBalance()).to.equal(1000);
    });

    it('should deposit money into the bank account', () => {
        const account = new BankAccount(1000);
        account.deposit(500);
        expect(account.getBalance()).to.equal(1500);
    });

    it('should withdraw money from the bank account', () => {
        const account = new BankAccount(1000);
        const result = account.withdraw(500);
        expect(result).to.be.true;
        expect(account.getBalance()).to.equal(500);
    });

    it('should not withdraw money if the balance is insufficient', () => {
        const account = new BankAccount(1000);
        const result = account.withdraw(1500);
        expect(result).to.be.false;
        expect(account.getBalance()).to.equal(1000);
    });
});



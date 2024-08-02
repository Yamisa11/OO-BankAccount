class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

export default BankAccount;

"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this.balance += amount;
    }
}
//# sourceMappingURL=3-%20Classes,%20Interfaces%20and%20OOP.js.map
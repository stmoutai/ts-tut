"use strict";
var _a;
let employee6 = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
let employee7 = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let weight;
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity;
let quantity1 = 50;
let quantity2 = 100;
let quantity3 = 100;
function greet(name) { }
greet(null);
function greet1(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet1(null);
function greet2(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet2(null);
greet2(undefined);
function greet3(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet3(null);
greet3(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer.birthday);
if (customer !== null)
    console.log(customer.birthday);
function getCustomer1(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer1 = getCustomer1(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let speed = null;
let ride = {
    speed: speed || 30,
};
let ride1 = {
    speed: speed !== null ? speed : 30,
};
let ride2 = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let phone = document.getElementById("phone");
console.log(phone.value);
let phone1 = document.getElementById("phone");
console.log(phone1.value);
let phone2 = document.getElementById("phone");
console.log(phone2.value);
function render(document) {
    document.move();
    document.fly();
    document.whateverWeWant();
}
function render1(document) {
    document.move();
    if (typeof document === "string") {
        document.toUpperCase();
    }
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log("Hello World");
function reject(message) {
    throw new Error(message);
}
reject("error");
console.log("Hello World");
function reject1(message) {
    throw new Error(message);
}
reject1("error");
console.log("Hello World");
//# sourceMappingURL=2-%20Advanced%20Types.js.map
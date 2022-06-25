"use strict";
let sales = 123456789;
let sales_max = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, "3"];
let numbers2 = [];
let numbers3 = [];
let user = [1, "Mosh"];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 0] = "Small";
    Size2[Size2["Medium"] = 1] = "Medium";
    Size2[Size2["Large"] = 2] = "Large";
})(Size2 || (Size2 = {}));
var Size3;
(function (Size3) {
    Size3[Size3["Small"] = 0] = "Small";
    Size3[Size3["Medium"] = 1] = "Medium";
    Size3[Size3["Large"] = 2] = "Large";
})(Size3 || (Size3 = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income) { }
function calculateTax2(income) {
    return "abwu";
}
function calculateTax3(income) {
    return 0;
}
function calculateTax4(income) {
    if (income < 50000) {
        return income * 1.2;
    }
}
function calculateTax5(income) {
    if (income < 50000) {
        return income * 1.2;
    }
}
function calculateTax6(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTax7(income) {
    let x;
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTax8(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTax9(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax9(10000, 2022);
function calculateTax10(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTax11(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
let employee = { id: 1 };
employee.name = "Mosh";
let employee2 = { id: 1, name: "Mosh" };
let employee3 = { id: 1, name: "Mosh" };
employee3.id = 1;
let employee4 = { id: 1, name: "Mosh" };
employee4.id = 1;
let employee5 = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=1-%20Built-in%20Types.js.map
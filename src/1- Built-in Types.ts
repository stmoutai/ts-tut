// Javascript
// - number
// - string
// - boolean
// - null
// - undefined
// - object

// Typescript
// any
// unknown
// never
// enum
// tuple

let sales: number = 123456789;

// TS 很聪明，如果你在定义的时候没有给 type, 直接赋值
// TS 会帮你默认类型为你赋值的类型
let sales_max = 123456789; // 相当于 let sales_max: number = 123456789

let course: string = "TypeScript";

let is_published: boolean = true;

// 如果你定义变量的时候，没有赋初始值，TS 会认为是 any
// 当然尽量不要用 any!
let level;
level = 1;
level = "a";

// 看一个常见的例子
// Parameter 'document' implicitly has an 'any' type.ts(7006)
// function render (document) {
//     console.log(document)
// }

// 一种方式是，你知道你要做什么可以指定类型 document: any
function render(document: any) {
  console.log(document);
}

// 另外一种方式是关掉这个规则检查：tsconfig.json
// 设置 "noImplicitAny": false,
// 不建议这么做！！！

// let numbers: (string | number)[]
let numbers = [1, 2, "3"];

// let numbers2: any[]
let numbers2 = [];

// 如果你只想让数组只存放 number
let numbers3: number[] = [];

// Tuple 限制数组的长度以及各个 item 的类型
// 1, 'Mosh
let user: [number, string] = [1, "Mosh"];

// 你放3个就会报错
// let user: [number, string] = [1, 'Mosh', 3]

// 对应item上放的类型不对也会报错
// let user: [number, string] = ['abwu', 'Mosh']

// Tuple 最好用在长度只有两个的数组 [key, value]

// Enum
// list of const

const small = 1;
const medium = 2;
const large = 3;

enum Size {
  Small, // 默认第1个的值会是 0, Small = 0
  Medium, // 默认第2个的值会是 1, Medium = 1
  Large, // 以此类推
}

enum Size2 {
  Small, // 你也可以指定第1个的值会是 1, Small = 1
  Medium, // 默认第2个的值会是 2, Medium = 2
  Large, // 以此类推
}

enum Size3 {
  Small, // 你也可以指定固定的值，非 number, Small = 's
  Medium, // 那么其它的值，就需要你一一去指定了
  Large, // 以此类推
}

// 使用 const enum XXX
// TS编译器会编译出更简洁的代码
const enum Size4 {
  Small, // 默认第1个的值会是 0, Small = 0
  Medium, // 默认第2个的值会是 1, Medium = 1
  Large, // 以此类推
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
// function calculateTax(income: number): void
// :void 意味着这个fn 没有 return value
function calculateTax(income: number) {}

// 如果你 return 'abwu'
// TS 隐性的帮你：function calculateTax2(income: number): string
function calculateTax2(income: number) {
  return "abwu";
}

// 好的做法是：永远显性的指定你 fn 返回的类型
function calculateTax3(income: number) {
  return 0;
}

// 你发现，income param 没有使用，编译器页没有报错
// 因为你没有开启："noUnusedParameters": true
function calculateTax4(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
}

// 编译器会报错，因为 fn 默认会返回 undefined
// 然后你这里指定了返回 number
// 这带来另外一个设置："noImplicitReturns": true

// 会带来了另外一个提醒：Not all code paths return a value.
function calculateTax5(income: number) {
  if (income < 50_000) {
    return income * 1.2;
  }
}

// 所以，好的做法是永远指定返回的类型，并函数永远返回内容
function calculateTax6(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }

  return income * 1.3;
}

// let x; 编译器并没有报错
// 因为你没有打开对应的配置："noUnusedLocals": true,
function calculateTax7(income: number): number {
  let x;

  if (income < 50_000) {
    return income * 1.2;
  }

  return income * 1.3;
}

// 你应该移除掉没使用的代码
function calculateTax8(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }

  return income * 1.3;
}

// 新增一个入参
function calculateTax9(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

// 你调用整个函数的时候必须要传入两个参数，少一个多一个都不行
calculateTax9(10_000, 2022);

// 如果你想某一个参数为可传，可以使用 ? 可选符合
// 但是，当用户不穿的时候，你你需要做兜底（设定默认值）
function calculateTax10(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

// 另外一种做法就是，直接给默认值 taxYear = 2022
function calculateTax11(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

// 总结下
// 1、always 指定 params 的类型
// 2、always 指定 函数的返回类型
// 3、开启以下三个配置：
// "noUnusedLocals": true,
// "noUnusedParameters": true,
// "noImplicitReturns": true,

// Object
let employee = { id: 1 };

// 在JS是可以的，但是在TS会报错
employee.name = "Mosh";

// 我们可以指定 Object 的类型
let employee2: {
  id: number;
  name: string;
} = { id: 1, name: "Mosh" };

// 有些员工，可能没有电话号
let employee3: {
  id: number;
  name: string;
  phone?: number;
} = { id: 1, name: "Mosh" };

// 去改变员工的 id, 不会报错
// 但是你知道，员工的id是不允许被改变的（只读）
employee3.id = 1;

let employee4: {
  readonly id: number;
  name: string;
  phone?: number;
} = { id: 1, name: "Mosh" };

// 再去改变就会报错了
employee4.id = 1;

// 对象的 method 怎么处理
let employee5: {
  readonly id: number;
  name: string;
  phone?: number;
  retire: (date: Date) => void; // void 表示不返回东西
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// 但是这样定义 Object，代码的可读性跟屎一样
// 后面我们会学习怎么来优化它

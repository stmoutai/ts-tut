// Advanced Types
// type aliases
// unions and intersections
// type narrowing
// nullable types
// the unknown type
// the never type

// 这个例子中会存在三个问题
// 1、如果你需要创建另外一个 employee 你需要重复 相同的定义
// 2、其它的 employee 的样子可能会需要额外的 属性
// 3、这里的代码可读性很低
let employee6: {
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

// 可以使用 type aliases
type Employee = {
  readonly id: number;
  name: string;
  phone?: number;
  retire: (date: Date) => void; // void 表示不返回东西
};

// 使用 type aliases
let employee7: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// unions
function kgToLbs(weight: number | string): number {
  // weight.xxxx
  // 当时使用推断的时候，只能访问到 number 和 string 公共的特性

  // 你需要使用到 Narrowing
  if (typeof weight === "number") {
    // weight.xxxx
    // 在这里可以推断出所有 number 的属性
    return weight * 2.2;
  }

  return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// intersections
let weight: number & string;

// 当然不存在这样一个 既是 number 又是 string 的类型

// 看一个实际场景
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types
// 有些场景你需要某个变量就只允许是特定的值

// 这样明显不合理，因为可以赋值任何的 number
let quantity: number;

// 所以你需要
let quantity1: 50 = 50;

// 整个时候 quantity1 就只能等于50

// 当然你可以同时指定多个值
let quantity2: 50 | 100 = 100;

// 可以结合 type alias 使用
type Quantity = 50 | 100;
let quantity3: Quantity = 100;

// 不一定要是 number, 也可以是 string 等其它类型
type Metric = "cm" | "inch";

// nullable types
function greet(name: string) {}

// 不能传 null 因为你使用了 strict mode 的时候
// "strictNullChecks": true 默认也会是 true
// 当然你可以覆盖它 "strictNullChecks": false
// 但是不建议你这么做
greet(null);

// 这种场景一般都是给默认return
// 就是说你传入 null 我就默认返回 Hola
function greet1(name: string) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

// 你依然不能传 null
greet1(null);

// 如果你需要运行传 null, 你需要
function greet2(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet2(null);

// 但是你不可以传 undefined
greet2(undefined);

// 如果你需要运行传 undefined，你需要
function greet3(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

// 这样你可以
greet3(null);
greet3(undefined);

// optional chainning `?.`
// 看一个例子

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// 因为整个时候 customer = null
// 不能访问 .birthday 属性
console.log(customer.birthday);

// 你可以加一层判断
if (customer !== null) console.log(customer.birthday);

// 整个时候如果 getCustomer 有可能返回 undefined
function getCustomer1(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer1 = getCustomer1(0);

// 你需要再加一个条件判断
if (customer !== null && customer !== undefined) console.log(customer.birthday);

// 另外一种方式，你可以使用 optional property access operator ?.
console.log(customer?.birthday);

// 同样的，你可以这样
console.log(customer?.birthday?.getFullYear());

// 同样可以使用再访问元素
// Optional element access operator
// customers?.[0]

// 同样你可以用来调用函数
// Optional call operator
let log: any = null;
log?.("a");

// 这个 optional operator 就是为了解决 ES5 里存在的
// 使用前，先判断是否存在的问题，原来在 ES5 你需要写额外的逻辑来判断
if (customer !== null && customer !== undefined) console.log(customer.birthday);

// ES6 所以提供了整个新的 operator
console.log(customer?.birthday);

// nullable types
// 经常遇到的场景，需要给某个变量 默认值
let speed: number | null = null;

let ride = {
  // 在 ES5 我们这样
  // speed 不等于 Falsy(undefined, null, '', false, 0) 就用 speed，否则使用 30
  speed: speed || 30,
};

// 但是，在这个场景，0 是一个我们认为是运行的值，ES5 你需要
let ride1 = {
  speed: speed !== null ? speed : 30,
};

// 需要额外写逻辑去判断
// 幸运的是，ES6/TS 提供了 Nullish coalescing operator
let ride2 = {
  // 意思是：当 speed 不等于 null 或 undefined 的时候使用 speed
  speed: speed ?? 30,
};

// Type Assertions
// 我们知道 JS 有 HTMLElement、HTMLInputElement 等
// 可以访问 xx.value

// 例如
let phone = document.getElementById("phone");

// 你尝试 phone.value TS是没法帮你做推断的，TS编译器也会报错
console.log(phone.value);

// 这种场景你可以使用 type assertions 意思是告诉 TS
// 我比你知道这个 phone 是什么类型的东西，你可以这样告诉 TS
let phone1 = document.getElementById("phone") as HTMLInputElement;

// 这样TS就知道应该怎么去给你做推断了（就可以做补全了）
console.log(phone1.value);

// Type Assertions 还有另外的语法
let phone2 = <HTMLInputElement>document.getElementById("phone");

console.log(phone2.value);

// 注意：as 在 TS 里，不像其它语言例如 C# 会做 type 隐性转换

// the unknown type

// 我们有 any type
// 在当你把一些陈年代码转成TS之后
function render(document: any) {
  document.move();
  document.fly();
  document.whateverWeWant();
}

// TS 编译器都不会报错
// 但是当程序运行的时候 document.move() 不存在，会挂掉
// 所以，尽量少用 any type

// 这个场景你可以优先使用 unknown type 配合 Narrowing 来使用
function render1(document: unknown) {
  // 使用了 unknown 后，TS编译器就会做语法检验，就会开始 BB 了
  document.move();

  // 你需要配合 Narrowing 来使用
  if (typeof document === "string") {
    // 这个时候 JS 编译器就不会 BB 了
    document.toUpperCase();
  }

  // document.whateverWeWant()
}

// 优先使用 unknown 也不要用 any

// the never type
function processEvents() {
  while (true) {
    // Read a message from a queue
  }
}

processEvents();

// 我们知道这一行代码，永远不会被执行的
// 但是 TS 编译器也没有认出来
console.log("Hello World");

// 我们需要关闭一个配置 "allowUnreachableCode": false

// 但是 TS 编译器依然没法做出判断
// 所以，在一些场景，你知道你的 fn 永远都不会 return，不会结束
// 你需要指定 :never type

// 看下面的例子
/*

function processEvents1(): never {
    while (true) {
        // Read a message from a queue
    }
}

processEvents1()

// 整个时候，编译器就知道这一行代码永远也不会被执行了
console.log('Hello World')

*/

// 看一个比较常见的例子（整个reject, 只会抛出错误，不会return）
function reject(message: string) {
  throw new Error(message);
}

reject("error");

// 这行代码不会被执行
console.log("Hello World");

// 所以这种场景，你就需要指定 :never type
function reject1(message: string): never {
  throw new Error(message);
}

reject1("error");

// 这行代码不会被执行
console.log("Hello World");

// 所以：
// 1、打开你的配置 "allowUnreachableCode": false
// 2、当你指定你的 fn 永远不会 return, 你需要指定 :never 返回类型

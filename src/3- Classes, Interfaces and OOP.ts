// oop
// classes
// constructors
// properties and methods
// access control keywords
// getters and setters
// static members
// index signatures
// inheritance
// polymorphism
// abstract classes
// interfaces

// oop
// 常见的编程范式（编程范式：你写代码的模式）
// procedural
// functional
// object-oriented
// event-driven
// aspect-oriented

// Object (Data(state) + Operations(behavior))

// Person
// Data/state :: properties
// name
// email
// Operations/behavior :: methods
// talk()
// dance()

// Class
// a class is a blueprint for creating objects
/**
 *
 * Account
 *      properties:
 *          id
 *          owner
 *          balance
 *      Methods
 *          deposit()
 *          withdraw()
 */

//  3- Creating Classes
class Account {
  id: number;
  owner: string;
  balance: number;

  // constructor fn 不需要指定 返回类型（它指定自己应该返回 Account 类型）
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }
}

// 4- Creating Objects
let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);
console.log(account instanceof Account);

// 5- Read-only and Optional Properties
// 实际场景中通常：
// 1、id 通常都不允许变更的，可以通过 `readonly` 限定
// 2、有些属性是可选的，例如 nickname 可以用 `?` 限定
/**

class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;
}

*/

// 6- Access Control Keywords
// Access Modifiers
// 1、public
// 2、private
// 3、protected

// 默认下所有的 property 都是 public

// 某个属性，通过 `private` 限定之后，只允许在 当前 class 里操作
// 在 class 之外去操作这个属性，TS 编译器会报错

class Account {
  private balance: number;
}

// 但通常 private 属性会用 _ 开头
class Account {
  private _balance: number;
}

let account1 = new Account(1, "Mosh", 0);
console.log(account._balance); // TS 编译器会报错

// 如何解决呢？
// 一种方式是，定义一个 getBalance() method
class Account {
  private _balance: number;

  getBalance(): number {
    return this._balance;
  }
}

console.log(account.getBalance());

// 如果有些 method 你并不想让 class 之外访问（只在 class 内调用）
// 同样的使用 `private`
class Account {
  private _balance: number;

  private calculateTax(): number {}

  getBalance(): number {
    return this._balance;
  }
}

// 7- Parameter Properties
// 每新增一个 property 都需要循序下面的模式
class Account {
  public readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
}

// 这些事都是有规律，重复的苦力
// TS 提供 Parameter Properties 来帮你自动做这些事情
class Account {
  // public readonly id: number;
  // owner: string;
  // private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this.balance = balance;
  }
}

// 上面删掉备注的代码后是这样，非常简洁
class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
}

// 8- Getters and Setters
// 上面我们通过定义一个 method 来返回 private 属性
class Account {
  private _balance: number;

  private calculateTax(): number {}

  getBalance(): number {
    return this._balance;
  }
}

console.log(account.getBalance());

// 这种方式没毛病，
// 但是还有另外一种更简洁的方式 Getters and Setters
class Account {
  private _balance: number;

  private calculateTax(): number {}

  get balance(): number {
    return this._balance;
  }
}

// 利用 getter 就可以像访问 public property 一样访问 private 属性
console.log(account.balance);

// 注意你只能 get，不能 set
account.balance = 100; // TS编译器会报错

// 如果你想 set 怎么办？
// 你可以通过 setter，setter 里你还可对值进行校验

class Account {
  private _balance: number;

  private calculateTax(): number {}

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid value");
    } else {
      this._balance = value;
    }
  }
}

// TS编译器就不会报错了
account.balance = 100;

// 9- Index Signatures
// 在JS你可以这样
let person = {};
person.name = "a";

// 但是TS不可以，编译器会报错（TS现需要你定义好了 shape）
// 如果你就是有这类的需求，TS也提供了这种能力 Index Signatures

// 一个座位表的场景
class SeatAssignment {
  // A1, A2, ...
  // Mosh, John, ...

  // index signature property
  [seatNumber: string]: string;
}

// 定义好 shape 后，我们就可以
let seats = new SeatAssignment();

// 然后
seats.A1 = "Mosh";
seats.A2 = "John";
seats["A3"] = "Lily";

// 好处是什么呢？当我们尝试去 赋值不是 string 的时候，编译器会报错
seats["A4"] = 100;

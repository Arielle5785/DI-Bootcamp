
//EX1
// class Employee{
//   constructor(private nom: string, private salary: number, public position: string, protected departement: string) { }
//   getName(): string{
//     return this.nom;
//   }
//   getSalary(): number {
//     return this.salary;
//   }
//   getDepartment(): string {
//     return this.departement;
//   }
//   getEmployeeInfo(){
//     return `name: ${this.getName()}, position: ${this.position}`;
//     }
//   }
  
// let employee5 = new Employee('Arielle', 160000, "CS OPerational Manager", "CS")

// console.log(employee5.getEmployeeInfo());

//EX2
// class Product{
//   constructor(readonly id: number, public name: string, public price: number) { }
//   getProductInfo() {
//     return `name: ${this.name}, price: ${this.price}`
//   }
// }
// let product1 = new Product(1, "Tea", 19.90)
// console.log(product1.getProductInfo());

//EX3
// class Animal{
//   constructor(public name: string) { }
//   makeSound(){
//     return 'sound'
//   }
// }

// class Dog extends Animal{
//   constructor(name: string) {
//     super(name);
//   }
//   makeSound() {
//     return 'bark' 
//   }  
// }

// let dog1 = new Dog('fluffy')
// console.log(dog1.makeSound());

//EX4
// class Calculator {
//   static add(a: number, b: number): number{
//     return a + b;
//   }
//   static substract (a: number, b: number): number{
//     return a - b;
//   }
// }
// console.log(Calculator.add(5, 3));
// console.log(Calculator.substract(10, 4));

//EX5
interface User{ readonly id: number, name: string, email: string }
interface PremiumUser extends User { membershipLevel?: string; }
function printUserDetails (user:PremiumUser): void {
    console.log(`id: ${user.id}, name: ${user.name}, email: ${user.email}, membership level: ${user.membershipLevel ?? 'Standard'}`);
}


let user1: PremiumUser = {
  id : 1,
  name : "Arielle",
  email : "aaa@gmail.com",
  membershipLevel : "VIP"
};
printUserDetails(user1)

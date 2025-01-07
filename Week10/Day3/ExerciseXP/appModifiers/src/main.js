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
function printUserDetails(user) {
    var _a;
    console.log("id: ".concat(user.id, ", name: ").concat(user.name, ", email: ").concat(user.email, ", membership level: ").concat((_a = user.membershipLevel) !== null && _a !== void 0 ? _a : 'Standard'));
}
var user1 = {
    id: 1,
    name: "Arielle",
    email: "aaa@gmail.com",
    membershipLevel: "VIP"
};
printUserDetails(user1);

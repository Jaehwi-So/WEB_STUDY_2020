`use strict`
//# 컴포지트 패턴
//객체들의 관계를 트리 구조로 구성하여 부분 전체의 계층을 표현하는 디자인 패턴
//단일 객체와 복합 객체를 동일하게 다루게 할 수 있다.

class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    getRoles() {
        return this.roles;
    }
    develop() {
        /* */
    }
}

class Designer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }

    getRoles() {
        return this.roles;
    }
    design() {
        /* */
    }
}

class Organization {
    constructor(){
        this.employees = []
    }

    //고용
    addEmployee(employee) {
        this.employees.push(employee);
    }

    //봉급 계산
    getNetSalaries() {
        let netSalary = 0;
        this.employees.forEach(employee => {
            netSalary += employee.getSalary()
        });
        return netSalary;
    }
}

const john = new Developer('kim', 12000)
const jane = new Designer('lee', 10000)

const organization = new Organization()
organization.addEmployee(john)
organization.addEmployee(jane)

console.log("Net salaries: " , organization.getNetSalaries()) // Net Salaries: 22000
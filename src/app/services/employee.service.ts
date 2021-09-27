import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   employees:Employee[]=[
     {
       id:1,
       name:"Anna",
       email:"anna@gmail.com"
     },
     {
      id:2,
      name:"john",
      email:"john@gmail.com"
     }
   ];
  constructor() { }
  onGet(){
    return this.employees;
  }

  OnGetEmployee(id:Number){
return this.employees.find(x=>x.id===id);

}


  onAdd(employee:Employee){
    this.employees.push(employee);;
  }
  onDelete(id:Number){
     let employee=this.employees.find(x=>x.id===id);
      let index=this.employees.indexOf(employee,0);
      this.employees.splice(index,1);
    }
    onUpdate(employee:Employee){
      let oldEmployee=this.employees.find(x=>x.id===employee.id);
      oldEmployee.name=employee.name;
      oldEmployee.email=employee.email;
    }
}

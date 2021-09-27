import { EmployeeService } from './../../../services/employee.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number;
  header:string;
  employee:Employee={
    id:0,
    name:'',
    email:''
  }
  constructor(private router:Router,private route:ActivatedRoute,private EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.header=this.id===0?'Add Employee':'Edit Employee';
    if(this.id!=0){
      this.employee=this.EmployeeService.OnGetEmployee(this.id);
    }
  }
onSubmit(form:NgForm){

let employee:Employee={
  id:form.value.id,
  name:form.value.name,

  email:form.value.email,

}
if(this.id===0){
  this.EmployeeService.onAdd(employee);

}
else{
  this.EmployeeService.onUpdate(employee);
}
this.router.navigateByUrl('');
}
}

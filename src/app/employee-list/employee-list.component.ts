import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee : Employee;

  employees : Employee[];

  selectedEmployee: Employee;

  constructor() { }

  ngOnInit() {
    this.employee = {
      Firstname: "Balaji",
      Lastname: "Ravichandran",
      Id: 1
    };


    this.employees = [{
      Firstname: "Balaji",
      Lastname: "Ravichandran",
      Id: 1
    },{
      Firstname: "ji",
      Lastname: "ra",
      Id: 2
    },{
      Firstname: "ba",
      Lastname: "ba",
      Id: 3
    }]

  }

  onSelect(emp: Employee){
    this.selectedEmployee = emp;
  };

}

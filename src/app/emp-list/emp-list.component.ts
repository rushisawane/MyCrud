import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'app-emp-list',
    templateUrl:'../emp-list/emp-list.component.html',
    styleUrls:['../emp-list/emp-list.component.css']

})
export class EmpListComponent
{
   @Input("getEmp") Emp;
  // @Output() setEmp = new EventEmitter();

}
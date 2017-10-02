import {Component} from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import {Employee} from '../employee';
@Component({
    selector:'app-emp',
    templateUrl:'../emp/emp.component.html'
})
export class EmpComponent
{
    //Get Employee object from parent component
    newEmp=new Employee();
    //@Input("getEmp") newEmp;
    @Output() setEmp=new EventEmitter();
    //newEmp=new Employee();

    addDetails()
    {
        console.log(this.newEmp);
        this.setEmp.emit(this.newEmp);
        this.newEmp=new Employee();
    }
}
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
    @Input("getEmp") newEmp;
    @Output() setEmp=new EventEmitter();
    //newEmp=new Employee();
    
    addDetails()
    {
        //Set Employee object to the Parent Component
        this.setEmp.emit(this.newEmp);
    }
}
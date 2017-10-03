import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
    selector:'app-emp-update',
    templateUrl:'../emp-update/emp-update.component.html'
})
export class EmpUpdateComponent implements OnInit
{
    @Input("updateEmp") Emp;

    @Output() setUpdatedEmp = new EventEmitter();

    updateEmp = new Employee();

    ngOnInit(){
        Object.assign(this.updateEmp,this.Emp);
    }

    updateEmployee()
    {
        this.setUpdatedEmp.emit({edited:this.updateEmp, original:this.Emp});
        //this.updateEmp=new Employee();
        this.updateEmp.editable = false;

    }

}
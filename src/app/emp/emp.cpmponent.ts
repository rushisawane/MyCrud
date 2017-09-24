import {Component} from '@angular/core'
import { Emp } from '../emp';

@Component({
    selector:'app-emp',
    templateUrl:'./emp.component.html'
})
export class EmpComponent
{
    showEmp:boolean=false;
    employees:Array<Emp>=[
        new Emp(1,'ABC',15000),
        new Emp(2,'XYZ',17000),
        new Emp(3,'PQR',10000)
    ]
    empNew=new Emp(1,'csd',10000);

    addEmp()
    {
       
        this.employees.push(this.empNew);
        this.showEmp=true;
    }
}
import { Component,Input } from '@angular/core';

@Component({
    selector:'app-emp-update',
    templateUrl:'../emp-update/emp-update.component.html'
})
export class EmpUpdateComponent
{
    @Input("updateEmp") updateEmp;
}
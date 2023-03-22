import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private staff:StaffService, private route: ActivatedRoute,private router:Router){}  
  addStaff=new FormGroup({    
    id:new FormControl(''),
    employeeName:new FormControl(''),    
    phoneNo:new FormControl(''),    
    email:new FormControl(''),
    age:new FormControl(''),
    employeeAddress:new FormControl(''),
    salary:new FormControl('')  
  
  }); 
  ngOnInit(): void {
    history.pushState(null, '', location.href);
    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        alert(`You can't go back at this time.`);
      });
  }  
  SaveData(){ 
    this.staff.saveStaff(this.addStaff.value).subscribe({
      next:(result)=>{   
          this.router.navigate(["/staff/all"])
      },
      error:(error) =>
      {
      console.log(error);    
      }
    }) 
  }
}

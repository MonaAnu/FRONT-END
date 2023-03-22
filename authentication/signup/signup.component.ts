import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { match } from '../passwordvalidator';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  roleHasError = true;

  user: User = {    
    userName: '',   
     password: '',    
     active: false,    
     role: ''  }
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  signupForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z\s]*$')]],
    role: ['Role',Validators.required],
    password: ['', [Validators.required,Validators.minLength(5)]],
    confirmPassword: ['', Validators.required]
  },
  {
    validators: match('password', 'confirmPassword')
  }
  );
  

  validateRole(value: any) {
    if (value === "Role") {
      this.roleHasError = true;
    } else {
      this.roleHasError = false;
    }
  }
  get userName() {
    return this.signupForm.get('userName');
  }
  get roles() {
    return this.signupForm.get('role');
  } 
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  onSubmit() {
     if (confirm('Registered Successfully'))    
    this.user = {      
      userName: this.signupForm.get('userName')?.value!,      
      password: this.signupForm.get('password')?.value!,      
      active: true,      
      role: this.signupForm.get('role')?.value!    
    }    
    console.log(this.user);    
    this.authService.register(this.user).subscribe(      
      {        
        next: (data) => this.router.navigate(['signin']),        
        error: (data)=>console.log(data)      
      }    
      );  
    }

}



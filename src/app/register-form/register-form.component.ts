import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, NgForm, ValidatorFn } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

function validatePassword(): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      let group = control as FormGroup;
      if (group.controls['password'] && group.controls['passwordconf']) {
        isValid = group.controls['password'].value == group.controls['passwordconf'].value;
      }
    }
    if (isValid) {
      return null;
    } else {
      return { 'passwordCheck': 'failed' }
    }
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  

constructor(
  private userService: UserService,
  private router: Router,
  private toastr: ToastrService
){}

  
model:User={
  firstName: '',
  lastName: '',
  contactNumber: '',
  email: '',
  address: '',
  password: '',
  userid_pk: 0
};
ngOnInit(){    
}

  onFormSubmit(){
    this.userService.registerUser(this.model).subscribe(
      (response: any) => {
        this.toastr.success( 'Login to your account' ,'Account Created');
        this.router.navigateByUrl('home');
      },
      (error: any) => {
        console.log(error);
        this.toastr.error(error.error.errorMessage, 'Sorry');
      }
    );
  }

}

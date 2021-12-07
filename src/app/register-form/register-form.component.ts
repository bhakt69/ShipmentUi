import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

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
        this.toastr.success( 'Login Successful' ,'Success');
        this.router.navigateByUrl('home');
      },
      (error: any) => {
        console.log(error);
        this.toastr.error(error.error.errorMessage, 'Sorry');
      }
    );
  }

}

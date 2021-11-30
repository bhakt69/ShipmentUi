import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {    
  }

  onSubmit(userRegistration:NgForm){
    // console.log(userRegistration.value);
    this.userService.registerUser(userRegistration.value).subscribe(
      (response: any) => {
        this.router.navigateByUrl('home');
      },
      (error: User) => {
        "Error"
      }
    );
  }

}

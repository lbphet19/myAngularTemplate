import { LoginStatusService } from './../services/login-status.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators ,FormGroup, AbstractControl} from "@angular/forms";
import { MustMatch } from "../validators/must-match.validator";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm:any;
  submitted = false;
  constructor(private fb:FormBuilder,private router:Router,
    private loginService:LoginStatusService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',[Validators.required, Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      // Validators.pattern('')]],
      confirmPassword:['',[Validators.required]]
    },{validator:MustMatch('password','confirmPassword')});
  }

  get f(){ return this.loginForm.controls};
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid)
     return;
    alert('Congrats!');
    // truoc reset luu lai info
    this.loginForm.reset();
    this.loginService.setStatus(true);
    this.router.navigate(['/']);
  }
  // get() password{
  //   return
  // }

}

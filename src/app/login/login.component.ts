import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http : HttpClient,
    private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario:[''],
      password:['']
    });
  }

  login(){
    
  }
  
  userForm = new FormGroup({
    'email': new FormControl(''),
  });

  userSubmit()
    {
      console.log(this.userForm.value);
    }
  
}

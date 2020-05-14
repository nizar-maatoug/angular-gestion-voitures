import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "./auth.service";

import { User } from "./model/user.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user:User={username:'', password:''};

  constructor(private authService: AuthService,
              private router :Router) { }

  ngOnInit(): void {
  }

  onLogin(){

    this.authService.signIn(this.user).subscribe(
      res => {this.router.navigate(['/voitures'])}
    );


  }

}

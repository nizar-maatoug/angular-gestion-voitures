import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.jeton.subscribe(
      jeton => this.isLogged=!!jeton
    );

  }

}

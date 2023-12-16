import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OauthComponent } from '../oauth/oauth.component';  


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [OauthComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
  providers: []
})
export class LogoutComponent {
  constructor(
    private router: Router,
    private oauthService: OauthComponent ,
  ) {}

  cerrarSesion() {
    this.oauthService.signOut();
    
  }

}

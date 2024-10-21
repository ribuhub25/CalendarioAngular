import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public auth:AuthService){}
}

import { Component } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor (
    private cookieService : CookieService,


  ) {}



}

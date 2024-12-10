import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { User } from 'src/app/auth/models/user.model';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor (
    private profileService : ProfileService,
    private cookieService : CookieService,


  ) {
    this.getProfile();
  }

  public getProfile(): void {
    this.profileService.getProfile().subscribe(user => {
      console.log({ user });
    });
  };


}

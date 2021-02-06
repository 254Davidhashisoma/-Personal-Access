import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../profile.service';
import { Repositories } from '../searchClasses/repositories';
import { User } from '../searchClasses/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: './profile.component.css'
})
export class ProfileComponent  implements OnInit {
  userprofile: User
  userRepo:Repositories

  constructor(private ProfileComponent: ProfileService) { }
searchUser(user){
  this.ProfileService.searchUser(user).then((succes) =>{
    this.userprofile = this.ProfileService.userprofile;
  },(error) => {
    console.log(error)
  }
}
this.profileService.displayRepos(user).then((succes) => {
  this.userRepo = this.profileService.userRepo;
},
  (error) => {
    console.log(error)
  }
)

}

ngOnInit(): void {

this.searchUser('254Davidhashisoma');
}
}

import { Component, OnInit } from '@angular/core';


import { ProfileService } from '../profile.service'
import { Repositories } from '../searchClasses/repositories';
import { User } from '../searchClasses/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile!: User
  userRepo!: Repositories;

  constructor(private profileService: ProfileService) {
    //this.userinClass = new User("", "", 0, 0, "", "", "", "")
  }

  searchUser(user: string) {

    this.profileService.searchUser(user).then((succes) => {
      this.userProfile = this.profileService.userProfile;
    },
      (error) => {
        console.log(error)
      }
    )

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

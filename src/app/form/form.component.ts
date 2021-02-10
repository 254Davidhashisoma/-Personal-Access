import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  // styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  searchTerm!: string;
  @Output() searchProf = new EventEmitter<any>();

  searchUser() {
    this.searchProf.emit(this.searchTerm)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

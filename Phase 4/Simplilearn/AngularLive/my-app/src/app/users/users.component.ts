import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  defaultQuestion = 'pet';
  constructor() {}

  user = { username: '', email: '', secret: '' };

  submitted = false;
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secret;
    this.submitted = true;
    form.reset();
  }
}

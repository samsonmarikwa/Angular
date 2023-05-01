import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secretQuestion: string = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  submitted: boolean = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({ userData: { username: suggestedName } });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}

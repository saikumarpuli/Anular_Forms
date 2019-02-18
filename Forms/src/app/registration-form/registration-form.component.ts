import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm = new FormGroup({
    Name: new FormControl(''),
    FatherName: new FormControl(''),
    PostalAddress: new FormControl(''),
    PersonalAddress: new FormControl(''),
    sex: new FormControl(''),

  });
  public values: any;

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
  console.log(this.registrationForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  cities:string[] = [
    'Hyderabad',
    'Chennai',
    'Mumbai',
  ];
  courses:string[] = [
    'java',
    'angular',
    'typescript',
  ];
  districts:string[] = [
    'karimnagar',
    'warangal',
    'medak',
  ];
  states:string[] = [
    'Telangana',
    'Andhra pradesh',
    'Uttar Pradesh',
  ];
  registrationForm = new FormGroup({
    Name: new FormControl('',Validators.required),
    FatherName: new FormControl('',Validators.required),
    PostalAddress: new FormControl('',Validators.required),
    PersonalAddress: new FormControl('',Validators.required),
    male:new FormControl('',Validators.required),
    female:new FormControl('',Validators.required),

    city:new FormControl('',Validators.required),
    course:new FormControl('',Validators.required),
    district:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),

    Pincode: new FormControl('',Validators.required),
    Emailid: new FormControl('',Validators.required),
    DOB: new FormControl('',Validators.required),
    MobileNo: new FormControl('',Validators.required)

  });
  public values: any;
  submitted = false;
  get f() { return this.registrationForm.controls; }

  constructor( private fb: FormBuilder) {
  }

  ngOnInit() {
  }


  onSubmit() {
  console.log(this.registrationForm.value);
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)')

  }
}

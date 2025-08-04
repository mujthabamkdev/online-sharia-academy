import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment',
  imports: [
    ReactiveFormsModule,
    SharedMaterialModule,
    CommonModule
  ],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.scss'
})
export class EnrollmentComponent {

  submitted = false;
  private formBuilder = inject(FormBuilder);

  enrollmentForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    dob: ['', Validators.required],
    gender: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
    highestEducation: new FormControl(''),
    selectedCourse: new FormControl(''),
    enrollmentDate: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });


  // for submit
  onSubmit(): void {
    this.submitted = true;
    if(this.enrollmentForm.valid) {
        console.log('For submitted, values: ', this.enrollmentForm.value)
    } else {
      this.enrollmentForm.markAllAsTouched();
    }
  }

}

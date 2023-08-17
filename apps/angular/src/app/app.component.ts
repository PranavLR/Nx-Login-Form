import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '@nx/input-field';
import { passwordMatchValidator } from '@nx/password-match-validator';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, InputFieldComponent, RouterModule, ReactiveFormsModule],
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  title = 'angular';

  createForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  },
  {
    updateOn: 'blur',
    validators: [passwordMatchValidator('password', 'confirmPassword')]
  })

  onSubmit() {
    console.log(this.createForm.value);
  }

}

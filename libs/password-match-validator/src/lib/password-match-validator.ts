import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(passwordParam: string, confirmPasswordParam: string): ValidatorFn {
  return (controls: AbstractControl): ValidationErrors | null => {
    const password = controls.get(passwordParam)?.value;
    const confirmPassword = controls.get(confirmPasswordParam)?.value;

    return password && confirmPassword && password === confirmPassword
      ? null
      : { passwordMatch: true };
  };
}


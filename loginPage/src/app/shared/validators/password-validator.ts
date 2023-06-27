import { ValidatorFn, FormGroup } from '@angular/forms';

export function MatchValidator(): ValidatorFn | any {
    return (form: FormGroup, regex: RegExp): { [key: string]: boolean } | any => {
        const password: string = form.get("password")?.value;
        const confirmPassword: string = form.get("confirmPassword")?.value;
        if (!confirmPassword?.length) {
            return null;
        }
        if (confirmPassword.length < 8) {
            form.get('confirmPassword')?.setErrors({ minLength: true });
        } else {
            if (!/[A-Z]/.test(confirmPassword)) {
                form.get('confirmPassword')?.setErrors({ pattern: true });
            } else {
                if (password !== confirmPassword) {
                    form.get("confirmPassword")?.setErrors({ mismatch: true });
                } else {
                    return null;
                }
            }
        }
    }
}

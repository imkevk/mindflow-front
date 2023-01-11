import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-element-dialog',
  templateUrl: './add-element-dialog.component.html',
  styleUrls: ['./add-element-dialog.component.scss']
})
export class AddElementDialogComponent {
  form: FormGroup = this.fb.group({
    title: [null, Validators.required],
    subtitle: [null],
    previousStep: [null, Validators.required]
  });

  constructor(private readonly fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data?.stepTitle) {
      this.form.get('title')?.setValue(data.stepTitle);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      text: ['', Validators.required],
      textarea: [],
      number: [],
      disable: [{ value: "test", disabled: true }],
      checkbox: [],
      date: [],
      dateTime: [],
      time: [],
      radio: [],
      select: []
    });
  }

  submit(): void {

  }
}

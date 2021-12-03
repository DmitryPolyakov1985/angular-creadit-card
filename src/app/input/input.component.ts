import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl | any;
  @Input() label?: string;

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    return this.control.dirty && this.control.touched && this.control.errors;
  }
}

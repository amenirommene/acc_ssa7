import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {

  myForm : FormGroup = new FormGroup({
    title : new FormControl(),
    description : new FormControl(),
    date:new FormControl(),
    lieux : new FormControl(),
    nbmax : new FormControl()
  })
}

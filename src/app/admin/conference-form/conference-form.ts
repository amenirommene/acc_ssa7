import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {

  private readonly fb = inject(FormBuilder);
  myForm : FormGroup = new FormGroup({
    title : new FormControl('',[Validators.required,Validators.minLength(10)]),
    description : new FormControl('', Validators.required),
    date:new FormControl(),
    lieux : new FormControl(),
    nbmax : new FormControl()
  })

  //FB
myForm2=this.fb.group({
  title : ['',[Validators.required,Validators.minLength(10)]],
    description : ['', Validators.required],
    date: [],
    lieux : [],
    nbmax : []
})
  formStatus = toSignal(this.myForm.statusChanges, {initialValue:this.myForm.status})
}

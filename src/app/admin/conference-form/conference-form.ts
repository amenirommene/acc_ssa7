import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConferenceService } from '../../services/conference-service';
import { Router } from '@angular/router';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {

  private readonly fb = inject(FormBuilder);
    private readonly confs = inject(ConferenceService);
    private router = inject(Router);
  myForm : FormGroup = new FormGroup({
    title : new FormControl('',[Validators.required,Validators.minLength(10)]),
    description : new FormControl('', Validators.required),
    date:new FormControl(),
    lieu : new FormControl(),
    nbmax : new FormControl()
  })

  //FB
myForm2=this.fb.group({
  title : ['',[Validators.required,Validators.minLength(10)]],
    description : ['', Validators.required],
    date: [],
    lieu : [],
    nbmax : []
})
  formStatus = toSignal(this.myForm.statusChanges, {initialValue:this.myForm.status})
  formValue = toSignal(this.myForm.valueChanges, {initialValue:this.myForm.value})
OnSubmit(){
 const confValue =  computed<Conference> (()=>{return{
title:this.formValue().title,
description:this.formValue().description,
date:this.formValue().date ?? '',
maxParticipants:this.formValue().nbmax ?? '',
place:this.formValue().place ?? '',
nbParticipants:0,
id:0
  }})
//this.confs.addConference(this.formValue()).subscribe(()=>this.router.navigateByUrl('/conferences'));
this.confs.addConference(confValue()).subscribe(()=>this.router.navigateByUrl('/conferences'));
}

}

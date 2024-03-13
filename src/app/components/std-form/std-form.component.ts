import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/services/student.service';
import { UuidService } from 'src/services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  stdForm !: FormGroup;

  constructor(private _studentService : StudentService,
    private _uuidService : UuidService) { }

  ngOnInit(): void {
    this.createStdForm()
  }

  createStdForm(){
    this.stdForm = new FormGroup({
      fname : new FormControl(null,[Validators.required]),
      lname : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      contact : new FormControl(null,[Validators.required])
    })
    }
    onAddStudent(){
      if(this.stdForm.valid){
        console.log(this.stdForm.value);

        let obj = {
          ...this.stdForm.value,
          id : this._uuidService.create_UUID()}
          console.log(obj);
          this._studentService.addStudent(obj)
        this.stdForm.reset();
      
      }
    }
  }


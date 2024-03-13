import { Injectable, OnInit } from '@angular/core';
import { Istd } from 'src/model/student';
import { SnackbarService } from './snackbar.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit{

  stdArray : Array<Istd>=[
    {
      fname : "Priti",
      lname : "Jadhav",
      email : "pj@gmail.com",
      contact : 1234567890,
      id : "11"
    }
  ]
  constructor(private _snackBarService : SnackbarService) { }

  ngOnInit(): void {
    
  
  }

  fetchAllData():Array<Istd>{
    return this.stdArray
  }

  addStudent(stdObj : Istd){
    this.stdArray.push(stdObj)
    this._snackBarService.openSnackBar(`Student ${stdObj.fname} ${stdObj.lname} is Added Successfully !`)
    
  }
  removeStd(id : string){
    let getIndex = this.stdArray.findIndex(std => std.id === id)
    this.stdArray.splice(getIndex, 1)
    this._snackBarService.openSnackBar(`Student with id ${id} is Removed !`)
  }
}

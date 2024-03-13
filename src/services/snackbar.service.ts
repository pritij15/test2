import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService implements OnInit {
  



  constructor(private _snackBar : MatSnackBar) { }

  openSnackBar(msg : string){
    this._snackBar.open(msg, "Close",{
      duration : 2500,
      horizontalPosition : 'left',
      verticalPosition : 'top'
    })
  }

  ngOnInit(): void {
    
  }

}

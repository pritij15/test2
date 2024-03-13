import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/model/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {
stdArray !: Array<Istd>

  constructor(private _studentService : StudentService) { }

  ngOnInit(): void {
    this.stdArray = this._studentService.fetchAllData()
    console.log(this._studentService.fetchAllData())
  }

  onRemoveStd(stdId : string){
    this._studentService.removeStd(stdId)
  }
}

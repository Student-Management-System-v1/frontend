import { Component, OnInit } from '@angular/core';
import {Result} from "../../../model/reuslt.model";
import {ResultService} from "../../../service/result.service";


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  results!: Result[];
  constructor(private resultService:ResultService) { }

  ngOnInit(): void {
    this.results = [];
    this.resultService.getAllResults().subscribe(res => {
      console.log("--> API RESPONSE: GET Req")
      console.log(res)
      this.results = res;
    },error => {
      console.log(error)
    });
  }



}

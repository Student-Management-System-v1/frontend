import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Result} from "../model/reuslt.model";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  API_URL = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  getAllResults(){
    return this.http.get<Result[]>(`${this.API_URL}/results`);
  }

  saveResult(result:Result){
    return this.http.post<Result>(`${this.API_URL}/results`,result)
  }
}

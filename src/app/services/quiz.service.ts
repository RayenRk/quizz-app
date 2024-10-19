import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  apiURL = "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple";
  
  constructor(private http: HttpClient) {}

  getQuestion(): Observable<any> {
    return this.http.get(this.apiURL);
  }
    

}

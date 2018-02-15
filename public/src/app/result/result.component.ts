import { Component, OnInit } from '@angular/core';
import { _createDefaultCookieXSRFStrategy } from '@angular/http/src/http_module';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score: Number = 0;
  remaining: Number = 0;
  questions;
  constructor(private _dataService: DataService, private router: Router) { 
    this.score = this._dataService.score;
    this.questions = this._dataService.actualQuestions;
    this.remaining = 10 - this.questions.length;

  }

  ngOnInit() {
  }

  navtoQuiz(){
    this._dataService.score = 0;
    this.questions.length = 0;
    this.router.navigate(['/selectquiz']);  
  }
  navtoLogin() {
    this._dataService.score = 0;
    this.questions.length = 0;
    this.router.navigate(['/']); 
  }
}

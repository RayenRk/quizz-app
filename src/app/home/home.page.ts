import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  question: any;
  options!: string[];

  constructor(private serviceQuiz: QuizService) {}

  ngOnInit() {
    this.serviceQuiz.getQuestion().subscribe(data => {
      this.question = data.results[0];
      this.options = [...this.question.incorrect_answers, this.question.correct_answer];
      this.options = this.shuffleOptions(this.options);  // Shuffle the options
    });
  }

  shuffleOptions(options: string[]): string[] {
    return options.sort(() => Math.random() - 0.5);
  }
  
}

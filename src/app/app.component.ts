import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a17';
  factorialResult!: number;
  factorialInput: number = 1;
  worker!: Worker;

  constructor() {
  }

  ngOnInit() {
    this.defineWebWorker();
  }

  listenForWebWorker() {
    this.worker.onmessage = ({ data }) => {
      this.factorialResult = data;
    };
  }


  defineWebWorker() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      this.listenForWebWorker();
    }
    return;
  }

  calculateFactorial() {
    if (!this.worker) {
      return;
    }
    this.worker.postMessage(this.factorialInput);
  }

  ngOnDestory() {
    this.worker && this.worker.terminate();
  }
}
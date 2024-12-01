import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../assets/css/style.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  completedProjects: number = 0;
  happyCustomers: number = 0;
  expertEmployees: number = 0;
  awardsWon: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.countUp('completedProjects', 7518, 2000);
    this.countUp('happyCustomers', 3472, 2000);
    this.countUp('expertEmployees', 2184, 2000);
    this.countUp('awardsWon', 4523, 2000);
  }

  countUp(property: 'completedProjects' | 'happyCustomers' | 'expertEmployees' | 'awardsWon', target: number, speed: number): void {
    let current = 0;
    const increment = Math.ceil(target / speed);
    const interval = setInterval(() => {
      current += increment;
      this[property] = current;
      if (current >= target) {
        clearInterval(interval);
        this[property] = target;
      }
    }, 1);
  }
}

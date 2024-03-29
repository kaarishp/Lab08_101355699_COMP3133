import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  template: '<h2>{{ getTitles() }}</h2><p>{{ getCurrentDate() }}</p>'
})
export class StudentComponent {
  title = 'My List of Students';

  getTitles() {
    return this.title;
  }

  getCurrentDate() {
    return new Date();
  }
}

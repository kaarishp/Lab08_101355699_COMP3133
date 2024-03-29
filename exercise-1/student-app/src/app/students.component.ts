import { Component } from '@angular/core';

@Component({
    selector: 'students',
    template: `
        <h2>Students</h2>
        <p>My List of Students</p>
        '<h2>{{ getTitles() }}</h2
        ><p>{{ getCurrentDate() }}</p>
    `
})

export class StudentsComponent {
    title = 'My List of Students';

    getTitles() {
      return this.title;
    }
  
    getCurrentDate() {
      return new Date();
    }
}
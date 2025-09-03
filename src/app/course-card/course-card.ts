import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  courseName: string = 'Angular';
  duration: string = '3 Days';
  trainerName: string = 'Kanini';
}

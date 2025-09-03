import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  studentName: string = 'Yuvaraj';
  rollNumber: number = 34;
  course: string = 'Fullstack Development';
  profilePic: string = 'StudentImg.png';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  private category = [
    {id: 1, value: 'Development'},
    {id: 2, value: 'Art'},
    {id: 3, value: 'Administrative'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

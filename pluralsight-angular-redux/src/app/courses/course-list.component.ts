import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { filterCourses, IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CourseActions } from './course.actions';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // filteredCourses = [];
  @select('filteredCourses') filteredCourses$: Observable<Course>;

  constructor(private ngRedux: NgRedux<IAppState>,
    private courseActions: CourseActions
  ) {  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.courseActions.filterCourses(searchText);
  }

  // getCourses() {
  //   this._courseService.getCourses()
  //     .subscribe(courses => {
  //       this.courses = this.filteredCourses = courses;
  //     });
  // }

  // updateFromState() {
  //   const allState = store.getState();
  //   this.filteredCourses = allState.filteredCourses;
  // }

  ngOnInit() {
    // this.getCourses();
    // this.updateFromState();
    // store.subscribe(() => {
    //   this.updateFromState();
    // });
    this.courseActions.getCourses();
    componentHandler.upgradeDom();
  }
}
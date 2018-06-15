import {Component} from '@angular/core'
import { CoursesService } from './courses.service';


@Component ({
    selector: 'courses',
    //template: '<h2>{{ "Title: " + title }}</h2>'
    template: `
        <p>Favorite? <span class = "glyphicon glyphicon-star"></span></p> 
      {{text | summary: 10}}
    `
})
export class CoursesComponent {
    title = "List of Courses";
    isActive = true;
    getTitle () {
        return this.title;
    }

    courses;
    email = "abc@xyz.com";
    constructor (service: CoursesService){
        //let service = new CoursesService();
        this.courses = service.getCourses();
}
    onDivClicked() {
        console.log("Div was clicked as well!!!");
    }
    onSave($event) {
        $event.stopPropagation();
        console.log("Button yahoo was clicked!", $event);
    }
    onKeyUp () {
        console.log(this.email);
    }
    //logic for calling an HTTP service
    course = {
        title: "The Complete Angular Course",
        rating: 4.97,
        students: 30123,
        price: 190.95,
        releaseDate: new Date (2016,1,3)
    }
    text = "This is to show how a custom built pipe works!!!!!!!!!!!!!!!!!"

}
import {Component} from '@angular/core'
import { AuthorsService } from './authors.service';


@Component ({
    selector: 'authors',
    template: `<h2> {{getNames()}} </h2>
        <ul>
            <li *ngFor = " let author of authors ">
            {{author}}
            </li>
        </ul>
    `
})
export class AuthorsComponent {
    name = "List of authors";
    getNames () {
        return this.name;
    }
    authors;

    constructor (service: AuthorsService) {
        this.authors = service.getAuthors();
    }


}
import { Component } from '@angular/core';
import { Character } from './character';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    person: Character = new Character('', 30, 'shaman');

    changeName() {
        this.person.name = 'Tutu';
        this.person = JSON.parse(JSON.stringify(this.person));
    }
}

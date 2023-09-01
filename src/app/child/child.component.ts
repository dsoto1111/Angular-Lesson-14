import { Component, Input } from '@angular/core';
import { Character } from '../character';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})

export class ChildComponent {
    @Input() get person() {
        return this._person;
    } set person(obj: Character) {    
        obj.name = obj.name.trim() || "There is no name present";
        if (obj.name === 'There is no name present') {
            this.setClass = false;
            this.styleChange = {backgroundColor: 'red', fontWeight: 'bold'};
        } else {
            this.setClass = true;
            this.styleChange = {backgroundColor: 'orange', fontWeight: 'normal'};            
        }
        this._person = obj;
        console.log(obj);        
    }
    private _person!: Character;

    styleChange!: {backgroundColor: string, fontWeight: string};

    blueColor: string = 'background-color: blue;';
    maroonColor: string = 'background-color: maroon;';
    position: string = 'relative';
    left: string = '2';

    setClass: boolean = true;

    multipleClassesOne = {setAlignment: true, changeColor: true};
    multipleClassesTwo = ['setAlignment', 'changeColor'];    
    multipleClassesThree = 'setAlignment changeColor';  

    constructor() { }

}
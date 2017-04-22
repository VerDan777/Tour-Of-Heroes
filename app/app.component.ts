    import {Component} from 'angular2/core';
    
    export class Hero {
        id:number;
        name:string;
    }
    @Component({
    selector:'my-app',
    template: `<h1>{{title}}</h1>
    <h2>{{hero.name}}</h2>
    <div>
        <label> id:</label>
        {{hero.id}}
        <label> name:</label>
        {{hero.name}}

    </div>
        <div> 
        <label>name:</label>
        <input placeholder="Name" [(ngModel)]="hero.name"/>
        
        </div>   `
    })
    
    
    export class AppComponent {
    title="Tour of Heroes";
    hero:Hero {
    id:1,
    name:"Winstorm"
    };
    }
    
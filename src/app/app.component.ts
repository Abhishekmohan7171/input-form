import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'input-form';
  textCount = "";

  onUpdate(event: Event) {
    //console.log(event);
	this.textCount = (<HTMLInputElement>event.target).value;
  }

 
}

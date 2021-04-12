import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showTitle: boolean = false;

  userLoggedIn = true

  title = 'Hello World';

  getMessage(): string {
    return 'This Is Hello Message From Angular'
  }

  titleClasses() {
    return this.userLoggedIn ? 'active' : 'hide'
  }



  disableInput = true

  ngClasses() {
    return {
      red: this.disableInput,
      green: !this.disableInput,
      title: true
    }
  }

  ngStyles() {
    return {
      'color': this.disableInput ? 'red' : 'green',
      'text-decoration': this.disableInput ? 'line-through' : 'none'
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showTitle: boolean = false;

  userLoggedIn = true;

  title = 'Hello World';

  getMessage(): string {
    return 'This Is Hello Message From Angular';
  }

  titleClasses() {
    return this.userLoggedIn ? 'active' : 'hide';
  }

  disableInput = true;

  ngClasses() {
    return {
      red: this.disableInput,
      green: !this.disableInput,
      title: true,
    };
  }

  ngStyles() {
    return {
      color: this.disableInput ? 'red' : 'green',
      'text-decoration': this.disableInput ? 'line-through' : 'none',
    };
  }

  printHello() {
    this.disableInput = !this.disableInput;
  }

  email: string = '';
  changeValue(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.email = value;

    console.log(this.email);
  }

  changeValueWithElement(input: HTMLInputElement) {
    const value = input.value;
    this.email = value;

    console.log(this.email);
  }

  changeValueWithElementValue(value: string) {
    this.email = value;

    console.log(this.email);
  }

  username = 'test test';

  // changeUserName(value: string) {
  //   this.username = value;
  // }
  print() {
    console.log(this.username)
  }

  loggedIn: boolean = true

  counter: number = 0

  state: string = 'initial'

  countUp() {
    this.counter++;

    if (this.counter == 5 || this.counter == 6) {
      this.state = 'sec'
    } else if (this.counter === 10) {
      this.state = 'third'
    } else {
      this.state = 'skdhcksfh'
    }
  }


  users = [
    {
      name: 'Ahmed',
      age: 18
    },
    {
      name: 'Mohammed',
      age: 29
    },
    {
      name: 'ali',
      age: 49
    },
    {
      name: 'ibrahem',
      age: 27
    },
  ]

}

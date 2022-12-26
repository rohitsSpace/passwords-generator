import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  handleLettersChange = () => {
    this.includeLetters = !this.includeLetters;
  };
  handleNumbersChange = () => {
    this.includeNumbers = !this.includeNumbers;
  };

  handleSymbolsChange = () => {
    this.includeSymbols = !this.includeSymbols;
  };

  handleLengthChange = (value: string) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  };

  handleClick = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '~!@#$%^&*()_+=';
    let validCharForPassword = '';
    let generatedPassword = '';

    if (this.includeLetters) {
      validCharForPassword += letters;
    }
    if (this.includeNumbers) {
      validCharForPassword += numbers;
    }
    if (this.includeSymbols) {
      validCharForPassword += symbols;
    }
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharForPassword.length);
      generatedPassword += validCharForPassword[index];
    }

    this.password = generatedPassword;
  };
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-omterminal',
  imports: [FormsModule],
  templateUrl: './omterminal.component.html',
  styleUrl: './omterminal.component.css',
})
export class OmterminalComponent {
  log = 'Mi terminal';
  command: string = '';

  executeCommand(): void {
    this.log += `\n$ ${this.command}`;
    if (this.command === 'help') {
      this.log += '\n Available commands: help, echo, clear';
    } else if (this.command === 'clear') {
      this.log = '';
    } else {
      this.log += `\m Command not found: ${this.command}`;
    }
    this.command = '';
  }
}

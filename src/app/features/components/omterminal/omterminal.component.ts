import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-omterminal',
  imports: [FormsModule],
  templateUrl: './omterminal.component.html',
  styleUrl: './omterminal.component.css',
})
export class OmterminalComponent {
  @ViewChild(`scrollContainer`) private scrollContainer!: ElementRef;
  log = 'Mi terminal';
  command: string = '';

  executeCommand(): void {
    // this.log += `\n ${this.command}`;
    // if (this.command === 'help') {
    //   this.log += '\n Available commands:youtube, github, spotify, help, clear';
    // } else if (this.command === 'clear') {
    //   this.log = '';
    // } else {
    //   this.log += `\n Command not found: ${this.command}`;
    // }
    // this.command = '';
    //
    switch (this.command) {
      case 'youtube':
        this.youtubeScrapper();
        break;
      case 'github':
        console.log('Navigating to GitHub...');
        break;
      case 'spotify':
        console.log('Navigating to Spotify...');
        break;
      case 'help':
        this.log += '\n Available commands: youtube, github, spotify, help, clear';
        break;
      case 'clear':
        this.log = '';
        break;
      default:
        console.log(`Command not found: ${this.command}`);
        break;
    }
  }

  youtubeScrapper(): void {
    console.log('YouTube scrapper function called');
  }
  ngAterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    const el = this.scrollContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  }
}

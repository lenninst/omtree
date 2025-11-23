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
    switch (this.command) {
      case 'youtube':
        this.youtubeScrapper();
        break;
      case 'github':
        console.log('Navigating to GitHub...');
        break;
      case 'spotify':
        this.youtubeScrapper();
        break;
      case 'help':
        this.log += '\n Available commands: youtube, github, spotify, help, clear';
        break;
      case 'clear':
        this.clearLog();
        break;
      default:
        this.logfailed();
        break;
    }
  }

  logfailed(): void {
    this.log += '\n Command not found';
    this.command = '';
  }

  clearLog(): void {
    this.log = '';
    this.command = '';
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

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubeService } from '../../../services/service';
import { YouTubeItem, YouTubeResponse } from '../../../core/models/youtube.model';
import { log } from 'node:console';

@Component({
  selector: 'app-omterminal',
  imports: [FormsModule],
  templateUrl: './omterminal.component.html',
  styleUrl: './omterminal.component.css',
})
export class OmterminalComponent {
  @ViewChild(`scrollContainer`) private scrollContainer!: ElementRef;
  log: string[] = [];
  command: string = ' ';

  // usar api
  items?: YouTubeItem[] = [];

  constructor(private youtubeService: YoutubeService) {}

  getYoutubeUser(command: string) {
    this.youtubeService.searchChannel(command).subscribe({
      next: (response) => {
        this.items = response.items;
        console.log(this.items);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
  executeCommand(): void {
    const parts = this.command.split(' ');
    const mainCommand = parts[0];
    const args = parts.slice(1).join(' ');

    switch (mainCommand) {
      case 'youtube':
        if (args) {
          this.youtubeScrapper(args);
          this.addlog('✔ ' + parts.join(' '));
        } else {
          // this.log += '\n Ingresa un nombre de usuario de YouTube';
          this.addlog('✘ Ingresa un nombre de usuario de YouTube');
        }
        break;
      case 'github':

        console.log('Navigating to GitHub...');
        break;
      case 'spotify':
        // this.youtubeScrapper();
        break;
      case 'help':
        this.log.push('\n Available commands: youtube, github, spotify, help, clear');
        break;
      case 'clear':
        this.clearLog();
        break;
      default:
        this.logfailed();
        break;
    }
  }

  addlog(message: string): void {
    this.log = [...this.log, message + '\n'];
  }
  onEnter(): void {
    this.executeCommand();
    this.command = '';
  }
  logfailed(): void {
    // this.log += '\n Command not found';
    this.addlog('✘ Comando no valido');
    this.command = '';
  }

  clearLog(): void {
    // this.log = '';
    this.command = '';
    this.log = [];
    ``;
  }
  youtubeScrapper(args: string): void {
    this.getYoutubeUser(args);
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

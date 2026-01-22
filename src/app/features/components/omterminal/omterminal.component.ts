import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubeService } from '../../../services/service';
import { YouTubeItem, YouTubeResponse } from '../../../core/models/youtube.model';

@Component({
  selector: 'app-omterminal',
  imports: [FormsModule],
  templateUrl: './omterminal.component.html',
  styleUrl: './omterminal.component.css',
})
export class OmterminalComponent {
  @ViewChild(`scrollContainer`) private scrollContainer!: ElementRef;
  log = 'Mi terminal';
  command: string = 'lenninst';

  // usar api
  items?: YouTubeItem[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.getYoutubeUser(this.command);
  }

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
    this.getYoutubeUser(this.command);
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

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected readonly icons = [
    {
      name: 'Youtube',
      icon: ' ',
      link: '/youtube',
    },
    {
      name: 'Github',
      icon: ' ',
      link: 'github',
    },

    {
      name: 'Spotify',
      icon: ' ',
      link: '/spotify',
    },
  ];
}

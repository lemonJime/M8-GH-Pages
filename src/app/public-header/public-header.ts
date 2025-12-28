import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'public-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatTabsModule],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss',
})
export class PublicHeaderComponent {

}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'private-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatTabsModule],
  templateUrl: './private-header.html',
  styleUrl: './private-header.scss',
})
export class PrivateHeaderComponent {

}

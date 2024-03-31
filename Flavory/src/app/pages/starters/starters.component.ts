import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-starters',
  standalone: true,
  imports: [RouterLink, FilterComponent],
  templateUrl: './starters.component.html',
  styleUrl: './starters.component.css'
})
export class StartersComponent {

}

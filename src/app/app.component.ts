import { Component } from '@angular/core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collaborative-saving';
  faHandshake = faHandshake;

}

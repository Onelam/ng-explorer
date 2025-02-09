import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <!-- <h1>Welcome to {{title}}!</h1>
    <p>Hello world</p> -->

    <app-header />
    <main>
      <app-home />
    </main>
    <router-outlet />
  `,
  styles: [`
      main {
        padding: 16px;
      }
    
    `],
})
export class AppComponent {
  title = 'first-ng-app';
}

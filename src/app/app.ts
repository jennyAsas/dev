import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
 
  imports: [RouterLink],
  template: `
    <nav>
      <a routerLink="home">Home</a> |
      <a routerLink="about">About</a> |
      <a routerLink="projects">Projects</a> |
      <a routerLink="contact">Contact</a>
    </nav>
   
  `
})
class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

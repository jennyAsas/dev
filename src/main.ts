import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet,RouterLink,RouterLinkActive,RouterLinkWithHref } from '@angular/router';
import { routes } from './app/app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,RouterLinkWithHref],
  templateUrl: './app/app.html',  
})
class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

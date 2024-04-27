import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="flex flex-col relative mx-auto">
      <app-navbar />
      <main class="flex-grow min-h-screen px-10">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class AppComponent {
  title = 'AngularCartProject';
}

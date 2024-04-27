import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="py-10  bg-slate-600">
      <div class="px-10">
        <div class="h-[120px] flex items-center justify-center">
          <div class="text-white flex items-center justify-center gap-5">
            <span class="material-symbols-outlined"> copyright </span>
            <span>Eren Özdemir</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class FooterComponent {}

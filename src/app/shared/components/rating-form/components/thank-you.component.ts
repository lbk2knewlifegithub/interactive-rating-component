import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RatingFormService } from './../services/rating-form.service';

@Component({
  selector: 'lbk-thank-you',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      class="mt-4"
      src="assets/images/illustration-thank-you.svg"
      alt="Thank You"
    />

    <span
      class="mt-6 inline-block text-orange text-sm rounded-full px-4 py-2 shadow-3xl"
      >You selected {{ stars$ | async }} out of 5</span
    >

    <div class="text-center mt-4 mb-1">
      <h1 class="text-2xl text-white font-bold">Thank you!</h1>

      <p class="mt-4 text-grey">
        We appreciate you taking the tie to give a rating If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  `,
  styles: [
    `
      :host {
        @apply flex flex-col items-center;
      }
    `,
  ],
})
export class ThankYouComponent {
  stars$!: Observable<number>;
  constructor(private readonly _rs: RatingFormService) {}

  ngOnInit(): void {
    this.stars$ = this._rs.stars$;
  }
}

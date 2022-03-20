import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RatingFormService } from './../services/rating-form.service';

@Component({
  selector: 'lbk-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Icon Star-->
    <div
      class="duration-300 w-10 h-10 rounded-full grid place-content-center bg-gray-700 shadow-3xl"
      [style.transform]="rotate$ | async"
    >
      <img src="assets/images/icon-star.svg" alt="Star" />
    </div>
    <!-- end Icon Star-->

    <!-- Title-->
    <h1 class="text-2xl text-white font-bold mt-6">How did we do?</h1>
    <!-- end Title-->

    <!-- Some Text-->
    <p class="text-grey mt-4">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
    <!-- end Some Text-->

    <!-- Stars-->
    <lbk-stars class="mt-6 block"></lbk-stars>
    <!-- end Stars-->

    <!-- Submit Button-->
    <div class="mt-6">
      <button (click)="onSubmit()" class="btn btn-primary">Submit</button>
    </div>
    <!-- End Submit Button-->
  `,
})
export class RatingComponent implements OnInit {
  rotate$!: Observable<string>;

  constructor(private readonly _rs: RatingFormService) {}

  ngOnInit(): void {
    this.rotate$ = this._rs.stars$.pipe(
      map((stars) => {
        let deg = (360 / RatingFormService.MAX_STARS) * stars;
        console.log(deg);
        return `rotate(${deg}deg)`;
      })
    );

    setTimeout(() => this._rs.complexAnimation(), 200);
  }

  onSubmit() {
    this._rs.toThankYou();
  }
}

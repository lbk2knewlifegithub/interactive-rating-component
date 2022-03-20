import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RatingFormService } from './../services/rating-form.service';

@Component({
  selector: 'lbk-stars',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="flex flex-wrap gap-4 justify-center sm:justify-between">
      <li
        class="cursor-pointer duration-300 flex items-center justify-center bg-blue shadow-3xl w-12 aspect-square rounded-full text-grey"
        *ngFor="let item of starsArray$ | async; index as i"
        (mouseover)="setStar(i + 1)"
        (click)="unStar(i + 1)"
        [ngClass]="{
          '!bg-orange !text-white shadow-orange shadow-sm':
            i < (stars$ | async)!
        }"
      >
        {{ i + 1 }}
      </li>
    </ul>
  `,
})
export class StarsComponent implements OnInit {
  stars$!: Observable<number>;
  starsArray$!: Observable<number[]>;

  constructor(private readonly _rs: RatingFormService) {}

  ngOnInit() {
    this.stars$ = this._rs.stars$;
    this.starsArray$ = of(
      Array.from({ length: RatingFormService.MAX_STARS }) as number[]
    );
  }

  /**
   * - Set Star
   * @param stars
   */
  setStar(stars: number) {
    this._rs.stars = stars;
  }

  /**
   * - Un Star set stars to zero
   * @param stars
   * @returns
   */
  unStar(stars: number) {
    if (stars !== 1) return;
    this._rs.stars = 0;
  }
}

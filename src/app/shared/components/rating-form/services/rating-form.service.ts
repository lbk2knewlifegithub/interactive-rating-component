import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RatingFormService {
  static MAX_STARS = 5;

  animating = true;
  /**
   * - Number of stars
   */
  private _stars = new BehaviorSubject(0);
  stars$ = this._stars.asObservable();

  /**
   * - Is Rating
   * - true -> Display Rating Component
   * - false -> Display Thank You Component
   */
  private _isRating = new BehaviorSubject(true);
  isRating$ = this._isRating.asObservable();

  complexAnimation() {
    setTimeout(() => {
      let count = 0;
      let interval = setInterval(() => {
        count++;

        this._stars.next(
          Math.floor(
            Math.cos((count / Math.PI) * 2) * RatingFormService.MAX_STARS + 1
          )
        );

        if (count >= RatingFormService.MAX_STARS) {
          clearInterval(interval);
          this.animating = false;
          this._stars.next(0);
        }
      }, 200);
    }, 200);
  }

  toThankYou() {
    this._isRating.next(false);
  }

  set stars(stars: number) {
    if (this.animating) return;

    if (stars < 0 || stars > RatingFormService.MAX_STARS) return;
    this._stars.next(stars);
  }
}

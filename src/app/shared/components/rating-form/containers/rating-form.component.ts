import { scaleIn } from '@app/shared';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { RatingFormService } from './../services/rating-form.service';

@Component({
  selector: 'lbk-rating-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="bg-blue-500 h-screen flex justify-center items-center">
      <div
        class="shadow-3xl text-blue-500 bg-blue rounded-3xl p-6 max-w-[368px]"
      >
        <!-- Rating-->
        <lbk-rating *ngIf="isRating$ | async; else thankYou"></lbk-rating>
        <!-- end Rating-->

        <!-- Thankyou-->
        <ng-template #thankYou>
          <lbk-thank-you @scaleIn></lbk-thank-you>
        </ng-template>
        <!-- end thank you-->
      </div>
    </main>
  `,
  animations: [scaleIn()],
})
export class RatingFormComponent implements OnInit {
  isRating$!: Observable<boolean>;

  constructor(private readonly _rs: RatingFormService) {}

  ngOnInit(): void {
    this.isRating$ = this._rs.isRating$;
  }
}

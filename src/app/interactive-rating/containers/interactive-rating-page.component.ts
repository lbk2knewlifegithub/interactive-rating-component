import { ChangeDetectionStrategy, Component } from '@angular/core';
import { scaleIn } from '@app/shared';

@Component({
  selector: 'lbk-interactive-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="container">
      <lbk-rating-form @scaleIn></lbk-rating-form>
    </main>
  `,
  animations: [scaleIn()],
})
export class InteractiveRatingPageComponent {}

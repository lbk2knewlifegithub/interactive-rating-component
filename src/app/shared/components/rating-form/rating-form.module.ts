import { StarsComponent } from './components/stars.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent, ThankYouComponent } from './components';
import { RatingFormComponent } from './containers';
import { RatingFormService } from './services/rating-form.service';

const COMPONENTS = [RatingComponent, ThankYouComponent, StarsComponent];
const CONTAINERS = [RatingFormComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS, CONTAINERS],
  exports: [RatingFormComponent],
  providers: [RatingFormService],
})
export class RatingFormModule {}

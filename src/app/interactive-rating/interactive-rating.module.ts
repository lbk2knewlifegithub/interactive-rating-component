import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingFormModule } from '@app/shared';
import { InteractiveRatingPageComponent } from './containers';
import { InteractiveRatingRoutingModule } from './interactive-rating-routing.module';

const CONTAINERS = [InteractiveRatingPageComponent];

@NgModule({
  imports: [CommonModule, RatingFormModule, InteractiveRatingRoutingModule],
  declarations: [CONTAINERS],
})
export class InteractiveRatingModule {}

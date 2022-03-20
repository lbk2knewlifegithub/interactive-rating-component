import { InteractiveRatingPageComponent } from './containers/interactive-rating-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: InteractiveRatingPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractiveRatingRoutingModule {}

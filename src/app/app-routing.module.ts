import { InteractiveRatingModule } from './interactive-rating/interactive-rating.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./interactive-rating').then((m) => m.InteractiveRatingModule),
  },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

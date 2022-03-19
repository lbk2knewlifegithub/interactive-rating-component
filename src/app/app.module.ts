import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './core/containers/app.component';

@NgModule({
  imports: [BrowserModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { SizerComponentComponent } from './components/sizer-component/sizer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    SizerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { GhcornerComponent } from './ghcorner/ghcorner.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    StepperComponent,
    GhcornerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements AfterViewInit {

  stepText = gsap.timeline();
  stepIndex:number = 0

  ngAfterViewInit() {
    this.stepAnim(0)
  }

  onStepChange(event: any): void {
    console.log(event.selectedIndex);
    this.stepIndex = event.selectedIndex

    this.stepText.restart()
    this.stepAnim(this.stepIndex)
  }

  stepAnim(stepIndex:number) {
    this.stepText.fromTo(`.step${stepIndex + 1} p, .step${stepIndex + 1} li`, {
      opacity: 0
    },
    {
      duration: 2,
      opacity: 1,
      stagger: 0.3,
      ease: "sine.out"
    }, 1)
  }
}

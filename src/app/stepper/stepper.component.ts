import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements AfterViewInit {

  step1 = gsap.timeline();

  ngAfterViewInit() {
    this.step1anim()
  }

  onStepChange(event: any): void {
    console.log(event.selectedIndex);

    if (event.selectedIndex === 0) {
      this.step1.restart()
      this.step1anim()
    }
  }

  step1anim() {
    this.step1.fromTo(".step1 p", {
      opacity: 0
    },
    {
      duration: 2,
      opacity: 1,
      stagger: 1.5,
      ease: "sine.out"
    }, 1)
  }
}

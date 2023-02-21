import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AppService } from './../app.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements AfterViewInit {

  opener = gsap.timeline();
  dur:number = 2
  path:number = 0
  stepIndex:number = 0

  constructor(private appService: AppService) {
  }

  @ViewChild("lines", {read: ElementRef}) private lines: ElementRef;

  ngAfterViewInit() {
    this.path = this.lines.nativeElement.getTotalLength()

    this.createOpener()

    this.appService.stringSubject.subscribe(data => {
      console.log('next subscribed value: ' + data);
      this.stepIndex = data;
    });
  }

  createOpener() {
    gsap.set("#lines", {
      strokeDashoffset: `${this.path}px`,
      strokeDasharray: `${this.path}px`
    })
  
    this.opener.to(".label", {
      duration: this.dur,
      opacity: 1,
      stagger: 0.5,
      ease: "sine.out"
    }, 1)
    this.opener.to(".dot", {
      duration: this.dur,
      opacity: 0.5,
      stagger: 0.5,
      ease: "sine.out"
    }, 2)
    this.opener.to("#keybk", {
      duration: this.dur,
      opacity: 1,
      ease: "sine.out"
    }, 4)
    this.opener.to("#lastmonth", {
      duration: this.dur,
      opacity: 1,
      ease: "sine.out"
    }, 4.5)
    this.opener.to("#thismonth", {
      duration: this.dur,
      opacity: 1,
      ease: "sine.out"
    }, 5)
    this.opener.to("#lines", 1.5, {
      duration: 4,
      strokeDashoffset: 0
    }, 4)
  }

}

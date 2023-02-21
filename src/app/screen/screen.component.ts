import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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

  @ViewChild("lines", {read: ElementRef}) private lines: ElementRef;

  ngAfterViewInit() {
    this.path = this.lines.nativeElement.getTotalLength()
    console.log(this.path);

    this.createOpener()
  }

  createOpener() {
    gsap.set("#lines", {
      strokeDashoffset: '475px',
      strokeDasharray: '475px'
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

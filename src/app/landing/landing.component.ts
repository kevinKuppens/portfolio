import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moveBackground();
  }

  moveBackground(){
    const circles = document.getElementsByClassName("circles") as HTMLCollection;
    for(let i = 0; i < circles.length; i++){
      const circle = circles[i] as HTMLElement;
      if(i%2){
        document.addEventListener("mousemove", (e) => {
          const x = (window.innerWidth/2 - e.pageX) * 0.07;
          const y = (window.innerHeight/2 - e.pageY) * 0.1;
          circle.style.transform = `translateX(${x}px) translateY(${y}px) `;});
      }else{
        document.addEventListener("mousemove", (e) => {
          const x =-(window.innerWidth/2 - e.pageX) * 0.25;
          const y = -(window.innerHeight/2 - e.pageY) * 0.4;
          circle.style.transform = `translateX(${x}px) translateY(${y}px) `;});
      }
    }
  }

}

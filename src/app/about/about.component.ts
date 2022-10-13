import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  journey=[
  {src:'/assets/walking.png', title:'The JOURNEY began', text:'I started programming as a hobby a few years ago and I still enjoy programming immensely.'},
  {src:'/assets/heart.png', title:'Become pleasures', text:'I really enjoy developing software. For this reason I want to turn my hobby into my profession.'},
  {src:'/assets/lupe.png', title:'Search for more', text:'I realized I wanted more. I wanted to turn my hobby into my job. So I went looking and found the Developer Academy.'},
  {src:'/assets/takeoff.png', title:'Ready to takeoff', text:'I am now looking for new challenges to work as a Front End developer or build software with JavaScript.'},
]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'light-business-card',
  templateUrl: './light-business-card.component.html',
  styleUrls: ['./light-business-card.component.scss']
})
export class LightBusinessCardComponent implements OnInit {
  public color: string;
  public columns: string = "1";

  public links: any;

  constructor() {
    this.links = {
      stackOverflow: "https://stackoverflow.com/story/jmugz3",
      github: "https://github.com/jmugz3",
      paypal: "https://www.paypal.me/jmugaburu",
      youtube: "https://youtube.com",
      linkedIn: "https://www.linkedin.com/in/josemugaburu/",
      blog: "https://jmugz3.com",
      realEstate: "https://mugabits.com/realestate",
      projects: "https://jmugz3.com/projects"
    };
   }

  ngOnInit() {
    this.color = "#16a765";
  }

}

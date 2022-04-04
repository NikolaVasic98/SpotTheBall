import { Component, OnInit } from '@angular/core';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  imagePath: string = '../../../assets/images/soccer.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    const element = event.target.getBoundingClientRect();
    const x = event.clientX - element.left;
    const y = event.clientY - element.top;

    const xCoefficient = element.width / x;
    const yCoefficient = element.height / y;

    console.log(xCoefficient + ': ' + yCoefficient);
  }
}

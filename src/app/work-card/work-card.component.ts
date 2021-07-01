import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css'],
})
export class WorkCardComponent implements OnInit {
  @Input() link: string = '';
  @Input() thumbLink: string = '';
  constructor() {}

  ngOnInit(): void {}
}

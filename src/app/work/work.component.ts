import { Component, OnInit } from '@angular/core';
import { Works } from '../interfaces/Works.interface';
import { WorksService } from '../services/works-service.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  works: Works[];
  constructor(private worksServices: WorksService) {
    this.works = this.worksServices.getWorks();
  }

  ngOnInit(): void {}
}

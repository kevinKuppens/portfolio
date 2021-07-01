import { Injectable } from '@angular/core';
import { Works } from '../interfaces/Works.interface';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  constructor() {}
  getWorks(): Works[] {
    return [
      {
        id: 1,
        title: 'ULB VR',
        applications: ['Blender 3D', 'Photoshop', 'Substance Painter', 'Unity'],
        description:
          'As part of my intership in Hellion Cat studio, I had to make 3D models for a VR game.',
        link: 'ulb-vr',
        thumbnail: '../../assets/works/ulbvr-thumb.png',
      },
      {
        id: 2,
        title: 'ULB VR',
        applications: ['Blender 3D', 'Photoshop', 'Substance Painter', 'Unity'],
        description:
          'As part of my intership in Hellion Cat studio, I had to make 3D models for a VR game.',
        link: '#',
        thumbnail: '../../assets/works/ulbvr-thumb.png',
      },
      {
        id: 3,
        title: 'Unalock',
        applications: [
          'Blender 3D',
          'Photoshop',
          'Substance Painter',
          'Unity',
          'Illustrator',
          'C#',
        ],
        description: `Unlaock is a game developped as part of my bachelor in graphic design. 
          It's a 3 month focus developpement puzzle game that was  the main subject for my end of study work.
          I made everything from ground up : concepts, modeling, level design, brand identity, interaction developpement, ...`,
        link: '#',
        thumbnail: '../../assets/works/unalock-thumb.png',
      },
    ];
  }
}

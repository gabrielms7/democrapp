import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  elected: Candidate = {name: '', grade: '', photo: ''};
  candidates: Candidate[] = [
    {
      name: 'Gustavo Adolfo Petro Urrego 1',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    },
    {
      name: 'Gustavo Adolfo Petro Urrego 2',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    },
    {
      name: 'Gustavo Adolfo Petro Urrego 3',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    },
    {
      name: 'Gustavo Adolfo Petro Urrego 4',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    },
    {
      name: 'Gustavo Adolfo Petro Urrego 5',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    },
    {
      name: 'Gustavo Adolfo Petro Urrego 6',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    },
    {
      name: 'Gustavo Adolfo Petro Urrego 7',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    },
    {
      name: 'Gustavo Adolfo Petro Urrego 8',
      grade: '7-1',
      photo: 'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Candidate } from '../model/candidate';
import { ConfirmVoteComponent } from './confirm-vote.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  elected: Candidate = { name: '', grade: '', photo: '' };
  candidates: Candidate[] = [
    {
      name: 'Gustavo Petro',
      grade: '7-1',
      photo:
        'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg',
    },
    {
      name: 'Enrique Peñalosa',
      grade: '7-2',
      photo:
        'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg',
    },
    {
      name: 'Sergio Fajardo',
      grade: '7-3',
      photo:
        'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg',
    },
    {
      name: 'Jorge Robledo',
      grade: '7-4',
      photo:
        'https://pbs.twimg.com/profile_images/962471262747529216/Uo8lOkRJ_400x400.jpg',
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onVote() {
    const dialogRef = this.dialog.open(ConfirmVoteComponent, {
      data: {
        candidate: this.elected.name,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Implementar lógica para sumarle votos al candidato
        console.log('Sumar votos a ', this.elected.name);
      }
    });
  }
}

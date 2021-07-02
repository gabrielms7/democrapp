import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-vote',
  template: `<h1 mat-dialog-title>¿Está seguro?</h1>
             <mat-dialog-content>
               <p>Su voto será por {{ passedData.candidate }}</p>
             </mat-dialog-content>
             <mat-dialog-actions>
               <button mat-button [mat-dialog-close]="true">Si</button>
               <button mat-button [mat-dialog-close]="false">No</button>
             </mat-dialog-actions>`
})
export class ConfirmVoteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}

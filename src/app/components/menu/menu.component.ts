import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-menu',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  readonly dialog = inject(MatDialog);

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }
}

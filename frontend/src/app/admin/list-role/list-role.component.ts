import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  roleData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _roleService: RoleService,
    private _snackBar: MatSnackBar
  ) {
    this.roleData = {};
  }

  ngOnInit(): void {
    this._roleService.listRole().subscribe(
      (res) => {
        this.roleData = res.role;
      },
      (err) => {
        this.message = err.error;
        this.openSnackBarError();
      }
    );
  }

  updateRole(role: any, status: string) {
    let tempStatus = role.roleStatus;
    role.roleStatus = status;
    this._roleService.updateRole(role).subscribe(
      (res) => {
        role.status = status;
      },
      (err) => {
        role.status = tempStatus;
        this.message = err.error;
        this.openSnackBarError();
      }
    );
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }

}

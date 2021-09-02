import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }
  listRole() {
    return this._http.get<any>(this.env + 'role/listRole');
  }

  updateRole(role: any) {
    return this._http.put<any>(this.env + 'role/updateRole', role);
  }
}

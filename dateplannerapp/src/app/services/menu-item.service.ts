import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private readonly apiServerUrl = '';

  constructor(private readonly _http: HttpClient) {
  }

  get(): Observable<IMenuItem[]> {
    return this._http.get<IMenuItem[]>(`${this.apiServerUrl}/menu-item`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICarouselItem } from '../models/carousel-item';

@Injectable({
  providedIn: 'root'
})
export class CarouselItemService {
  private readonly apiServerUrl = '';

  constructor(private readonly _http: HttpClient) {
  }

  get(): Observable<ICarouselItem[]> {
    return this._http.get<ICarouselItem[]>(`${this.apiServerUrl}/carousel-item`);
  }
}

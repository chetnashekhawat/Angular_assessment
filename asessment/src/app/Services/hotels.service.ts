import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { IHotel } from '../Models/IHotel';
import { IAddHotel } from '../Models/IAddHotel';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  
  private_url = "https://localhost:44331/api/Hotels";
  
  
  constructor(private http :HttpClient){}
  getAllHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.private_url);
  }
  addHotel(hotel: IAddHotel): Observable<IAddHotel> {
    return this.http.post<IAddHotel>(this.private_url, hotel);
  }
  getHotel(id: number): Observable<IHotel> {
    let url: string = `${this.private_url}/${id}`;
    return this.http.get<IHotel>(url)
  }
  deleteHotel(id: number): Observable<IHotel> {
    let url: string = `${this.private_url}/${id}`;
    return this.http.delete<IHotel>(url)
  }
  updateHotel(id: number, hotel: IAddHotel): Observable<IAddHotel> {
    let url: string = `${this.private_url}/${id}`;
    return this.http.put<IAddHotel>(url, hotel);
  }

}

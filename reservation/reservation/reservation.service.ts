import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  constructor(private httpClient: HttpClient) { }
  getAllReservation(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(`http://localhost:8082/reservation/all`);
  }
  getById(id:number):Observable<Reservation>{
    return this.httpClient.get<Reservation>(`http://localhost:8082/reservation/${id}`);
  }
  deleteReservation(id:number): Observable<Reservation>{
    return this.httpClient.delete<Reservation>(`http://localhost:8082/reservation/delete/${id}`)
  }
  saveReservation(data:any):Observable<any>{ 
    return this.httpClient.post<any>(`http://localhost:8082/reservation/add`,data);  
  }
  updateReservation(reservation:Reservation):Observable<Reservation>{
   return this.httpClient.put<Reservation>(`http://localhost:8082/reservation/update`,reservation);
  }
}

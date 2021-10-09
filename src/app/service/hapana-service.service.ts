import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const apiUrl = "http://13.228.21.105";
// const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class HapanaServiceService {

  constructor(private http: HttpClient) { }

  getAllChat(): Observable<any> {    
    return this.http.get(`${apiUrl}/api/hapana`);
  }

  createChat(data: any): Observable<any> {
    console.log("data =>", data);
    
    return this.http.post(`${apiUrl}/api/hapana`, data)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
//import { environment } from '../config';
// import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';

//const baseUrl = 'http://10.111.138.176:8080/api/tutorials';
const baseUrl = 'http://exam-aseds-ine2.com/api/tutorials';


//je dois mettre localhost parce qu'avec le nom du conteneur backend, angular n'arrive pas à se connecter
//je pourrai mettre l'adresse ip du conteneur backend mais elle change

//const baseUrl = environment.backendUrl

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
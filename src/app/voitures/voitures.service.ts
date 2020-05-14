import { Injectable } from '@angular/core';

import { HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

import { Voiture } from "./model/voiture.model";
import { switchMap, tap, take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class VoituresService {

  private baseURL="http://localhost:8080/voitures";

  voitureChanged=new Subject<Voiture[]>();

  constructor(private http: HttpClient) { }

  /**Get voitures */
  getVoitures():Observable<Voiture[]>{
    return this.http.get<Voiture[]>(this.baseURL);
  }

  /**Get voiture */
  getVoiture(id:number):Observable<Voiture>{
    const url= this.baseURL+ '/'+ id;
    return this.http.get<Voiture>(url);
  }

  /**Post voiture */
  postVoiture(voiture: Voiture): Observable<Voiture>{
    return this.http.post<Voiture>(this.baseURL, voiture).pipe(
      tap(v => this.notifyVoitureChanged())
    )

 }

  /**PUT: mettre à jour la voiture dans le serveur */
  updateVoiture(voiture: Voiture): Observable<Voiture>{
     return this.http.put<Voiture>(this.baseURL, voiture).pipe(
      tap(v => this.notifyVoitureChanged())
    );
  }

  deleteVoiture(voiture: Voiture):Observable<String>{
    console.log(voiture.id);
    return this.http.delete<String>(this.baseURL+'/'+voiture.id).pipe(
      tap(v => this.notifyVoitureChanged())
    );
  }

  notifyVoitureChanged(){
    this.getVoitures().subscribe(
      voitures => this.voitureChanged.next(voitures)
    )
  }



}

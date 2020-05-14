import { Injectable, ErrorHandler, Input } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "./model/user.model";
import { Jeton } from "./model/jeton.model";
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({providedIn: 'root'})
export class AuthService {

  url="http://localhost:8080/authenticate";

  user=new BehaviorSubject<User>(null);
  jeton=new BehaviorSubject<Jeton>(null);

  constructor(private http: HttpClient){}

  signIn(user: User){

    console.log('debut authentification');

    return this.http.post<Jeton>(this.url, user).pipe(
      catchError(this.handleError),
      tap(jeton =>{
        console.log('1111');
        this.handleAuthentication(jeton as Jeton,user); })

    );


  }
  private handleError(err: HttpErrorResponse,caught: Observable<Jeton>):Observable<Input> {
    console.error('echec authentification');
    return null;
  }

  private handleAuthentication(jeton: Jeton,user: User){
    console.log('2222');
    console.log(jeton.jwt.toString())
    this.jeton.next(jeton);
    this.user.next(user);
    localStorage.setItem('jeton', JSON.stringify(jeton));
  }

}

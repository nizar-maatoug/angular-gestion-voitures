import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.jeton.pipe(
      take(1),
      exhaustMap(jeton =>{
        if(jeton==null){
          return next.handle(req);
        }
        req = req.clone({ headers: req.headers.set('Authorization', jeton.jwt.toString()) });
        console.log(req);
        return next.handle(req);

      })
    )

    return next.handle(req);
  }
}

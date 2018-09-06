import { SharedService } from './../../services/shared.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS  } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()   
export class AuthInterceptor implements HttpInterceptor{

    shared: SharedService;

    constructor(){
        this.shared = SharedService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest: any;

        if(this.shared.isLoggedIn()){
            console.log("Autorização"); 
            authRequest = req.clone({
                setHeaders: {   
                    "Authorization" : this.shared.token
                }
            });
            return next.handle(authRequest);
        }else{
            console.log("nao Autorização");
            return next.handle(req);
        }
    }

}
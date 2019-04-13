import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(
      catchError(error => {
        if(error instanceof HttpErrorResponse) {
          if (error.status=== 401) {
            return throwError("error.type");
          }
          const applicationError = error.headers.get('Application-error');
          if (applicationError) {
            console.error("intercepted");
            return throwError(applicationError)
          }
          const serverError = error.error;
          let ModalStateError = '';
          if (serverError && typeof serverError === 'object' ) {
            for(const key in serverError) {
              if(serverError[key]){
                ModalStateError += serverError[key] +'\n';
                console.log(ModalStateError,serverError[key]);
              }
            }
          }
          return throwError(ModalStateError || serverError);
       }
      }
    )
  );
}
}


export const ErrorInterceptorProvider = {
  provide : HTTP_INTERCEPTORS,
  useClass : ErrorInterceptor,
  multi : true
};

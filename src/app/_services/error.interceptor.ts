import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError((httpErrorResponse) => {
            
            if (httpErrorResponse.status === 401){
                return throwError(httpErrorResponse.error.title);
            }

            if (httpErrorResponse  instanceof HttpErrorResponse){
                const applicationError =  httpErrorResponse.headers.get('Application-Error');

                if (applicationError){
                    return throwError(applicationError);
                }

                const serverError = httpErrorResponse.error;

                let modelStateError = '';

                if (serverError.errors &&  typeof serverError.errors === 'object'){
                    for (const key in serverError.errors){
                       if (serverError.errors[key]) {
                          modelStateError += serverError.errors[key] + '\n';
                       }
                    }
                }

                return throwError(modelStateError || serverError || 'Server Error');
            }

            return throwError('Server Error');
          })
      );
    }
}

export const ErrorInterceptorProvider = {
provide: HTTP_INTERCEPTORS,
useClass: ErrorInterceptor,
multi: true
};

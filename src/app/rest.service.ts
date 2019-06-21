// https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  endpoint = 'https://localhost:8444/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getKunden(): Observable<any> {
    return this.http
      .get(this.endpoint, {
        headers: { Authorization: 'Basic YWRtaW46cA==' },
      })
      .pipe(map(this.extractData));
  }

  getKundenProfil(id): Observable<any> {
    return this.http
      .get(this.endpoint + id, {
        headers: { Authorization: 'Basic YWRtaW46cA==' },
      })
      .pipe(map(this.extractData));
  }

  addKunde(kunde): Observable<any> {
    console.log(kunde);
    return this.http
      .post<any>(this.endpoint, JSON.stringify(kunde), {
        headers: { Authorization: 'Basic YWRtaW46cA==' },
      })
      .pipe(
        tap(product => console.log(`added kunde w/ id=${product.id}`)),
        catchError(this.handleError<any>('addKunde'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

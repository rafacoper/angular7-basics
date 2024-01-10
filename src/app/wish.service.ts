import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WishService {

  constructor(private http: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getWishes() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json', // => 'assets/wishes.json?format=json'
      }
    });

    return this.http.get('assets/wishes1.json', options).pipe(catchError(this.handleError)); // Observable method
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error(`There is an issue with the client or network: `, error.error);
    } else {
      console.error('Server-side error: ', error.error);
    }
    return throwError(() => new Error('Cannot retrieve wishes from the server.'))
  }

  private addWishes() {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization')
    this.http.post('assets/wishes.json', options);
  }
}

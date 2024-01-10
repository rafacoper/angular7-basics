import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get('assets/wishes.json', options); // Observable method
  }

  private addWishes() {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization')
    this.http.post('assets/wishes.json', options);
  }
}
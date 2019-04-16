import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  getMaxTemperature(q) {
      return this.http.get('/weather/api/v2/tmax/' + q);
  }
  getMinTemperature(q) {
      return this.http.get('/weather/api/v2/tmin/' + q);
  }

  addTemp(data) {
    return this.http.post('/weather/api/v2/add-temp/', data);
  }
}

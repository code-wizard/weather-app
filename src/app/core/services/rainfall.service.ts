import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RainfallService {

  constructor(private http: HttpClient) { }

  getRainFallStat(q) {
    return this.http.get('/weather/api/v2/rainfall/' + q);
  }

  addRainfall(data) {
    return this.http.post('/weather/api/v2/add-rainfall/', data);
  }
}

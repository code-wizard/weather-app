import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getQueryParams(obj) {
    let index = 0;
    let q = '';
    Object.entries(obj).forEach(

      ([key, value]) => {
        if (index === 0) {
          q = '?' + key + '=' + value;
        } else {
          q = q + '&' + key + '=' + value;
        }
        index++;
      }
    );
    return q;
  }
}

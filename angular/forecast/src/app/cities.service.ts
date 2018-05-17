import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private _http: HttpClient) { 
  }
  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fe9dbf41e77f7f993487181ce566b213`)
    .pipe(map(reponse => reponse))
    .toPromise();
  }

}

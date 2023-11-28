import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weatherMode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(place: string):Observable<WeatherData> {
   return this.http.get<WeatherData>(environment.weatherAppUrl, {
      headers: new HttpHeaders()
        .set(environment.RapidApiHost, environment.RapidApiValue)
        .set(environment.XRapidAPIName, environment.XRapidAPIValue),
        params:new HttpParams().set('q',place).set('units','metric').set('mode','json')
    });
  }
}

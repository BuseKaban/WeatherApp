import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
  "Vary": "Accept-Encoding",
  "CDN-PullZone": "93447",
  "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
  "CDN-RequestCountryCode": "GB",
  "CDN-ProxyVer": "1.03",
  "CDN-RequestPullSuccess": "True",
  "CDN-RequestPullCode": "200",
  "CDN-CachedAt": "12/20/2022 12:43:52",
  "CDN-EdgeStorageId": "946",
  "CDN-Status": "200",
  "CDN-RequestId": "da7c201aa9647029d45e5a968041e047",
  "CDN-Cache": "MISS",
  "Cache-Control": "public, max-age=180",
  "Content-Type": "application/json",
  "Server": "BunnyCDN-FR1-951"
  })

}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  getWeather() {
    return this.http
      .get(
        'http://api.weatherapi.com/v1/current.json?key=10ef8d60b2f7432e9e0124220222012&q=istanbul&aqi=no',
        httpOptions
      );
  }
  constructor(private http: HttpClient) {}
}

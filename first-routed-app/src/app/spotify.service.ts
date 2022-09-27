import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD1tSMMnjnzXON7maFxwU8lU-97jWM-tkLICyGEeHJWBwF4_NCU6XBjgLo6jLikUZ7GC9TULMe7TzSQ7bCjOwQ5z7FdN1dzfuwxGynmZuwQS70eq9UrqxS_7GjgF31iyxcH14eEDh1ttWQQTLFwU-jwRLkcBpIk22PBGbPs69HVK4XT5BezeQ4Qs7SR6ipwAJ8-MOOW'
    });

    

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD1tSMMnjnzXON7maFxwU8lU-97jWM-tkLICyGEeHJWBwF4_NCU6XBjgLo6jLikUZ7GC9TULMe7TzSQ7bCjOwQ5z7FdN1dzfuwxGynmZuwQS70eq9UrqxS_7GjgF31iyxcH14eEDh1ttWQQTLFwU-jwRLkcBpIk22PBGbPs69HVK4XT5BezeQ4Qs7SR6ipwAJ8-MOOW'
    });
    
    return this.http.get(url, { headers });
  }

}
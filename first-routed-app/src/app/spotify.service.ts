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
        'Bearer BQCkkoT_PA5fuQ-mTYPyNyBTZQsnTp9xXuAaVUploH5cCDWjej8-nHt3NVTy0qyYxPFFCw67GcwtJisyeqFOqUTlBQAIzgs4VZlm87kjQogOf5sTEOPCqiURp1Dsobrai3H3WJAotYQIjroI-oyFnKZJf1ou6R_VH6_fbUZUYlFTlbKT98ExksLEMIY9mBmh1Pg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
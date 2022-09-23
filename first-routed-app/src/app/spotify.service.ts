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
        'Bearer BQBZWhxW4T8hUOfkDonTB2o6wV0hV-oDXCG81pCHkDQqWy1ojtF2epNE4UlfJ_o7q6F3aW47CEjP8Xpf1xHuhho9Qc-kViZch_4PR-NRQcSCnRVh_Z14KlRO_BDtDcD8QfXNfhLo1ZDdtwl7ls8XGDguVW5EWORpPMZDMrg_rCE2UChqPeg6x24npWhRtwdZcLUE'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
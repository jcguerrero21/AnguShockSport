import { Injectable } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";

import { PistasAlquiladas } from "./pistas-alquiladas";
import { Observable } from 'rxjs/Observable';

import 'rjs/add/operator/map';
import 'rjs/add/operator/first';
import 'rjs/add/operator/catch';

@Injectable()
export class PistasAlquiladasService{
  private headers = new Headers({'Content-Type':'application/json'});
  private url = 'http://localhost:8080/pistasAlquiladas/';

  constructor(private http: Http) {}

  getPistasAlquiladas(): Observable<PistasAlquiladas[]> {
    let url = `${this.url}`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}

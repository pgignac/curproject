import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Week } from "./week.model";
import { Order } from "./order.model";
import { map } from "rxjs/operators"
import { HttpHeaders } from '@angular/common/http'
const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class RestDataSource {
baseUrl: string;
baseUrl2: string;
auth_token: string;
constructor(private http: HttpClient) {
this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
//this.baseUrl2 = `${PROTOCOL}://${location.hostname}:${PORT}/`;
this.baseUrl2 = 'http://localhost:3900/';
}
getWeeks(): Observable<Week[]> {
//return this.http.get<Week[]>(this.baseUrl);
  
  return this.http.get<Week[]>("http://localhost:3999/weeks")
}

getWeek(id: number) {
  return this.http.get<Week>("http://localhost:3999/weeks/"+id)
}

saveWeek(week: Week): Observable<Week> {
  console.log(week);
return this.http.post<Week>(this.baseUrl2 + "weeks",
week, this.getOptions());
}
updateWeek(week): Observable<Week> {
return this.http.put<Week>(`${this.baseUrl2}weeks/${week.id}`,
week, this.getOptions());

}
deleteWeek(id: number): Observable<Week> {
return this.http.delete<Week>(`${this.baseUrl2}weeks/${id}`);
//this.getOptions());
}
authenticate(user: string, pass: string): Observable<boolean> {
return this.http.post<any>(this.baseUrl + "login", {
name: user, password: pass
}).pipe(map(response => {
this.auth_token = response.success ? response.token : null;
return response.success;
}));
}
private getOptions() {
return {
headers: new HttpHeaders({
"Authorization": `Bearer<${this.auth_token}>`
})
}
}
}
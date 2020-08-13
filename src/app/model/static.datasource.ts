import { Injectable } from "@angular/core";
import { Week } from "./week.model";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";
@Injectable()
export class StaticDataSource {
private weeks: Week[];

getWeeks(): Observable<Week[]> {
	return from([this.weeks]);
	}
saveOrder(order: Order): Observable<Order> {
console.log(JSON.stringify(order));
return from([order]);
}
}

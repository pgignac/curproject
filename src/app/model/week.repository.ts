import { Injectable } from "@angular/core";
import { Week } from "./week.model";
import { Product } from "./product.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class WeekRepository {
private weeks: Week[] = [];
constructor (private dataSource: RestDataSource ) {
dataSource.getWeeks().subscribe(data => {
this.weeks = data;
});
}
getWeeks(): Week[] {
return this.weeks;
}
getWeek(id: number): Week {
return this.weeks.find(p => p.week == id);
}
/*getProduct(id: number): Product {
return this.products.find(p => p.id == id);
}
getCategories(): string[] {
return this.categories;
}
*/
saveWeek(week: Week) {
if (week.week == null || week.week == 0) {
this.dataSource.saveWeek(week)
.subscribe(p => this.weeks.push(p));
} else {
this.dataSource.updateWeek(Week)
.subscribe(p => {
this.weeks.splice(this.weeks.
findIndex(p => p.week == id), 1, week);
});
}
}
deleteWeek(id: number) {
this.dataSource.deleteWeek(id).subscribe(p => {
this.weeks.splice(this.weeks.
findIndex(p => p.week == id), 1);
})
}
}
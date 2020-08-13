import { Component } from "@angular/core";
import { Week  } from "../model/week.model";
import { WeekRepository } from "../model/week.repository";
@Component({
templateUrl: "weekTable.component.html"
})
export class WeekTableComponent {
constructor(private repository: WeekRepository) { }
getWeeks(): Week[] {
return this.repository.getWeeks();
}
deleteWeek(id: number) {
this.repository.deleteWeek(id);
}
}
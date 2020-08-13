import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Week } from "../model/week.model";
import { WeekRepository } from "../model/week.repository";
@Component({
templateUrl: "weekEditor.component.html"
})
export class WeekEditorComponent {
editing: boolean = false;
week: Week = new Week();
constructor(private repository: WeekRepository,
private router: Router,
activeRoute: ActivatedRoute) {
this.editing = activeRoute.snapshot.params["mode"] == "edit";
if (this.editing) {
Object.assign(this.week,
repository.getWeek(activeRoute.snapshot.params["id"]));
}
}
getWeeks(): Week[] {
return this.repository.getWeeks();
}
getWeek(id: number): Week {
     return this.repository.getWeek(id);
 }

save(form: NgForm) {
this.repository.saveWeek(this.week);
this.router.navigateByUrl("/admin/main/weeks");
}
}
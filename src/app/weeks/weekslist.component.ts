import { Component } from "@angular/core";
import {  Week } from "../model/week.model";
import { WeekRepository } from "../model/week.repository";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
selector: "weekslist",
templateUrl: "weekslist.component.html"
})

export class WeeksListComponent {
  public blah: number;
 constructor(private repository: WeekRepository, activeRoute: ActivatedRoute, private router: Router) { 
  this.blah = activeRoute.snapshot.params["id"];
 }
   get weeks(): Week[] {
   return this.repository.getWeeks();
 }
 getWeeks(): Week[] {
   return this.repository.getWeeks();
 }
 getWeek(): Week {
     return this.repository.getWeek(this.blah);
 };

 getWeekCount(): number {
   return this.getWeeks().length;
 }

}
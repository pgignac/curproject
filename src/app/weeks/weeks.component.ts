import { Component } from "@angular/core";
import {  Week } from "../model/week.model";
import {  Product } from "../model/product.model";
import { WeekRepository } from "../model/week.repository";
import { ActivatedRoute } from "@angular/router";
@Component({
selector: "weeks",
templateUrl: "weeks.component.html"
})

export class WeeksComponent {

constructor(private repository: WeekRepository, activeRoute: ActivatedRoute) { 
  //this.id=activeRoute.snapshot.url[1].parameters;
} 

 get weeks(): Week[] {
  return this.repository.getWeeks();
 }

 getWeeks(): Week[] {
   return this.repository.getWeeks();
 }
 getWeek(id: number): Week {
     return this.repository.getWeek(id);
 }

 getWeekCount(): number {
   return this.getWeeks().length;
 }

}

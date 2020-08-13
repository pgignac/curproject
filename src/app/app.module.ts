import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeeksModule } from "./weeks/weeks.module";
import { WeeksListModule } from "./weeks/weekslist.module";
import { WeeksComponent } from "./weeks/weeks.component";
import { WeeksListComponent } from "./weeks/weekslist.component";
import {StoreModule} from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
@NgModule({
imports: [BrowserModule, WeeksModule, WeeksListModule, StoreModule,
RouterModule.forRoot([
{ path: "weeks", component: WeeksComponent, canActivate: [StoreFirstGuard]
},
{path: "weekslist/:id", component: WeeksListComponent },
{
path: "admin",
loadChildren: () => import("./admin/admin.module")
.then(m => m.AdminModule),
canActivate: [StoreFirstGuard]
},
{ path: "**", redirectTo: "/weeks" }
])],
providers: [StoreFirstGuard],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HrComponent } from './hr/hr.component';
import { SupplychainComponent } from './supplychain/supplychain.component';
import { SalesComponent } from './sales/sales.component';
import { MarketingComponent } from './marketing/marketing.component';
import { WeeklyComponent } from './crm/weekly/weekly.component';
import { MonthlyComponent } from './crm/monthly/monthly.component';
import { PerDayComponent } from './operations/per-day/per-day.component';
import { PerWeekComponent } from './operations/per-week/per-week.component';
import { PerMonthComponent } from './operations/per-month/per-month.component';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    SupplychainComponent,
    SalesComponent,
    MarketingComponent,
    WeeklyComponent,
    MonthlyComponent,
    PerDayComponent,
    PerWeekComponent,
    PerMonthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { PerMonthComponent } from './operations/per-month/per-month.component';
import { PerWeekComponent } from './operations/per-week/per-week.component';
import { PerDayComponent } from './operations/per-day/per-day.component';
import { WeeklyComponent } from './crm/weekly/weekly.component';
import { MonthlyComponent } from './crm/monthly/monthly.component';
import { SalesComponent } from './sales/sales.component';
import { SupplychainComponent } from './supplychain/supplychain.component';
import { HrComponent } from './hr/hr.component';
import { MarketingComponent } from './marketing/marketing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'marketing', component: MarketingComponent },
  { path: 'HR', component: HrComponent },
  { path: 'supply', component: SupplychainComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'perday', component: PerDayComponent },
  { path: 'perweek', component: PerWeekComponent },
  { path: 'permonth', component: PerMonthComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: 'weekly', component: WeeklyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

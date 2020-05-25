import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiOverviewListTableModule } from '@swapi-app/swapi/planets-overview/planets-overview-lists/shared/ui/ui-overview-list-table';
import { PlanetsOverviewDataAccessModule } from '@swapi-app/swapi/planets-overview/data-access';

import { PlanetsOverviewListRoutingModule } from './planets-overview-list-routing.module';
import { PlanetsOverviewListComponent } from './containers/planets-overview-list/planets-overview-list.component';
import { UiOverviewListPaginationModule } from '@swapi-app/swapi/planets-overview/planets-overview-lists/shared/ui/ui-planets-overview-list-pagination/ui-overview-list-pagination';

@NgModule({
  declarations: [PlanetsOverviewListComponent],
  imports: [
    CommonModule,
    PlanetsOverviewListRoutingModule,
    PlanetsOverviewDataAccessModule,
    UiOverviewListTableModule,
    UiOverviewListPaginationModule
  ]
})
export class PlanetsOverviewListDataListModule {}

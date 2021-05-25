import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BarmudaComponent } from './barmuda/barmuda.component';
import { FairypoolsComponent } from './fairypools/fairypools.component';
import { MonolithComponent } from './monolith/monolith.component';
import { RedseaComponent } from './redsea/redsea.component';
import { MTrenchComponent } from './mtrench/mtrench.component';
import { SupportComponent } from './support/support.component';
import { SvalbardComponent } from './svalbard/svalbard.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'', component: IndexComponent},
  {path:'bermuda', component: BarmudaComponent},
  {path:'support', component: SupportComponent},
  {path:'mtrench', component: MTrenchComponent},
  {path:'svalbard', component: SvalbardComponent},
  {path:'monolith', component: MonolithComponent},
  {path:'fairypools', component: FairypoolsComponent},
  {path:'redsea', component: RedseaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AboutComponent, BarmudaComponent, FairypoolsComponent, MTrenchComponent, MonolithComponent, RedseaComponent, SupportComponent, SvalbardComponent, IndexComponent]

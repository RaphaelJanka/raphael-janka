import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'privacy-policy', component: PrivacyPolicyComponent },
  {path: 'legal-notice', component: LegalNoticeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

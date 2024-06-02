import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { isGuestGuard, isUserAuthenticatedGuard } from "./guards/auth.guard";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [isGuestGuard] },
  { path: "signup", component: SignupComponent, canActivate: [isGuestGuard] },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [isUserAuthenticatedGuard],
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

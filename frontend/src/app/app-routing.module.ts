import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { IsGuestGuard, IsUserAuthenticatedGuard } from "./guards/auth.guard";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

// Definition of routes and their guards.
const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [IsGuestGuard] },
  { path: "signup", component: SignupComponent, canActivate: [IsGuestGuard] },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [IsUserAuthenticatedGuard],
  },
  { path: "", redirectTo: "login", pathMatch: "full" }, // Default route that redirects to login.
  { path: "**", component: PageNotFoundComponent }, // Catch-all route for undefined paths.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

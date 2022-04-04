import { Routes } from "@angular/router";
import { LoginComponent } from "src/app/components/login/login.component";
import { MainComponent } from "src/app/components/main/main.component";

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', component: LoginComponent}
];
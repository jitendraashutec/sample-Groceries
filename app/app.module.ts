import { NativeScriptModule, NativeScriptHttpClientModule, NativeScriptRouterModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { authProviders, appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { setStatusBarColors, BackendService, LoginService } from "./shared";

import { LoginModule } from "./login/login.module";
import { GroceriesModule } from "./groceries/groceries.module";

setStatusBarColors();

@NgModule({
  providers: [
    BackendService,
    LoginService,
    authProviders
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    LoginModule,
    GroceriesModule,
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreModule } from '../root-store/root-store.module';
import { ConfigService } from './services/config.service';
import { environment } from '../../../environments/environment';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptor } from './services/custome-http-interceptor';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';


export function ConfigLoader(configService: ConfigService) {
  // Note: this factory need to return a function (that return a promise)
  console.log('before load config');
  return () => configService.load(environment.configFile);
}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RootStoreModule,
    RouterModule
  ],
  providers: [HttpService, ConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor ,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    }
  ]
})
export class CoreModule { }


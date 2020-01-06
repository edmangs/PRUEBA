import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './component/confirm/confirm.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: "./assets/i18n/dashboard/", suffix: ".json" },
    { prefix: "./assets/i18n/security/", suffix: ".json" },
    { prefix: "./assets/i18n/shared/", suffix: ".json" },
    { prefix: "./assets/i18n/theme/", suffix: ".json" },
    { prefix: "./assets/i18n/", suffix: ".json" },
  ]);
}

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmComponent
  ],
  entryComponents: [
    ConfirmComponent
  ]
})

export class SharedModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(environment.locale);
    translate.use(environment.locale);
  }
}

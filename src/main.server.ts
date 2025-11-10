import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
// import { BootstrapContext } from '@angular/ssr';

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, config, context);
}

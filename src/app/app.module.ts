import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'environments/environment';

const config: SocketIoConfig = { url: environment.apis?.websocket, options: {} };

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SocketIoModule.forRoot(config),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

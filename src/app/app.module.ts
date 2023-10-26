import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'ws://localhost:3000', options: {} };

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

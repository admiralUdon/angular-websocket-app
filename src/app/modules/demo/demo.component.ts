import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from 'app/core/services/websocket.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule,]
})
export class DemoComponent {
    messages: any[] = [];
    newMessage: string = '';

    constructor(private websocketService: WebsocketService) {}

    ngOnInit() {
        this.websocketService.getMessages().subscribe((message: any) => {
        this.messages.push(message);
        });
    }

    sendMessage() {
        this.websocketService.sendMessage(this.newMessage);
        this.newMessage = '';
    }
}

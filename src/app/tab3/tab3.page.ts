import { Component } from '@angular/core';

import { Pasttrip, User, Property, Payment, Message } from '../models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public messages: Array<Message> = [];

  constructor() {
    let message1 = new Message();
    message1.sender="Tommy Hessel";
    message1.recipient="Nick Brinkmann";
    message1.subject="Hey";
    message1.content="You're a fantastic guy.";

    let message2 = new Message();
    message2.sender="Julian Trebach";
    message2.recipient="Nick Brinkmann";
    message2.subject="Yoooo";
    message2.content="Let's go for a run.";

    let message3 = new Message();
    message3.sender="Isaac Who Dis???";
    message3.recipient="Nick Brinkmann";
    message3.subject="I am a climber";
    message3.content="I like climbing very much. I am so tall and agile.";

    let message4 = new Message();
    message4.sender="Yuki Peters";
    message4.recipient="Nick Brinkmann";
    message4.subject="God damn, god damn";
    message4.content="Conversations with legends. Crazy how one day your idols can turn into your brethren. Bitches we severin'.";

    this.messages.push(message1);
    this.messages.push(message2);
    this.messages.push(message3);
    this.messages.push(message4);
  }

}

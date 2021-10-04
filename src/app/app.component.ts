import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hapana';
  character = "";
  characters = ["a", "b", "c"];
  chat = [
    {
      character: "",
      conversation: ""
    },
    {
      character: "",
      conversation: ""
    },
  ];
  titleName = "";
  chatLists: any = [];

  addCharacter() {
    if (this.character) {
      this.characters.push(this.character);
      this.character = ""
    }

  }


  saveChat() {
    console.log("chat =>", this.chat);
    this.chatLists.push({
      chat: this.chat,
      titleName: this.titleName
    });

    this.chat = [
      {
        character: "",
        conversation: ""
      },
      {
        character: "",
        conversation: ""
      },
    ];
    this.titleName = "";
  }

  addChat() {
    this.chat.push({
      character: "",
      conversation: ""
    })
  }

  deleteChat(index: number) {
    console.log(index);
    if (index > -1) {
      this.chat.splice(index, 1);
    }
    console.log("chat =>", this.chat);
  }


}

import { Component } from '@angular/core';
import { HapanaServiceService } from './service/hapana-service.service';

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
  list: any = [];


  constructor(private hapanaServiceService: HapanaServiceService) { }

  ngOnInit(): void {
    this.getAllChat();

  }

  addCharacter() {
    if (this.character) {
      this.characters.push(this.character);
      this.character = ""
    }

  }


  saveChat() {
    console.log("chat =>", this.chat);
    // this.chatLists.push({
    //   chat: this.chat,
    //   titleName: this.titleName
    // });
    let data = {
      chat: this.chat,
      titleName: this.titleName
    }
    this.hapanaServiceService.createChat(data).subscribe(res => {
      console.log("res =>", res);
      this.getAllChat();
    }, err => {
      console.log("err =>", err);

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
    console.log("index =>", index);
    if (index > -1) {
      this.chat.splice(index, 1);
    }
    console.log("chat =>", this.chat);
  }

  getAllChat() {

    this.hapanaServiceService.getAllChat().subscribe(res => {
      console.log(res);
      this.chatLists = res
    }, err => {
      console.log("err", err);

    });
  }

}

import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { Message, OpenAIChatCompletionResponseData } from 'src/app/interfaces';
import { OpenAIService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css'],
})
export class ChatGPTComponent {
  chat: Message[] = [];
  latestMessage: string = '';
  isLoading: boolean = false;

  constructor(private openAIService: OpenAIService) {}

  async send() {
    var newChatItem = {
      role: 'user',
      content: this.latestMessage,
    };

    this.chat.push(newChatItem);

    this.isLoading = true;

    //TODO: error handling
    var response = (await firstValueFrom(
      this.openAIService.postMessageToChatCompletionAPI(this.chat)
    )) as OpenAIChatCompletionResponseData;
    this.isLoading = false;

    var newResponseItem = {
      role: 'assistant',
      content: response.choices[0].message.content,
    };
    this.chat.push(newResponseItem);

    this.reset();
  }

  private reset() {
    this.latestMessage = '';
  }
}

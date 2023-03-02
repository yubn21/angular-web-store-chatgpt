import { Component } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

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

  send() {
    this.chat.push({
      role: 'user',
      content: this.latestMessage,
    });

    this.isLoading = true;

    this.openAIService.postMessageToChatCompletionAPI(this.chat).subscribe({
      next: (value) => {
        console.log(value);
        this.isLoading = false;

        this.chat.push({
          role: 'assistant',
          content: value.choices[0].message.content,
        });
      },
      error: (e) => console.error(e),
      complete: () => console.info('HTTP POST request completed.'),
    });

    this.reset();
  }

  private reset() {
    this.latestMessage = '';
  }
}

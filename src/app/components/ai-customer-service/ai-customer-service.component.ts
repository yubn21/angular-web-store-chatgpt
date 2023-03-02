import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { OpenAIService } from 'src/app/services/openai.service';
import { Message, OpenAITextCompletionResponseData } from '../../interfaces';

@Component({
  selector: 'app-ai-customer-service',
  templateUrl: './ai-customer-service.component.html',
  styleUrls: ['./ai-customer-service.component.css'],
})
export class AiCustomerServiceComponent {
  conversation: Message[] = [];
  latestMessage: string = '';
  isLoading: boolean = false;

  prompt: string =
    'The following is a conversation with a AI customer service assistant of a webshop. The assistant is creative, very humorous and helpful. The assistant is designed to provide human-like responses and communicate in a way that feels natural and intuitive to users. The webshop sells high quality umbrella, backpack, mug and bike made in Denmark.';

  constructor(private openAiService: OpenAIService) {}

  async send() {
    var newChatItem = {
      role: 'You',
      content: this.latestMessage,
    };

    this.conversation.push(newChatItem);
    this.prompt = this.prompt.concat(
      `${newChatItem.role} : ${newChatItem.content} \n AI: `
    );

    this.isLoading = true;

    //TODO: error handling
    var response = (await firstValueFrom(
      this.openAiService.postMessageToTextCompletionAPI(this.prompt)
    )) as OpenAITextCompletionResponseData;
    this.isLoading = false;

    var newResponseItem = {
      role: 'AI',
      content: response.choices[0].text,
    };
    this.conversation.push(newResponseItem);
    this.prompt = this.prompt.concat(`${newResponseItem.content} \n`);

    this.reset();
  }

  private reset() {
    this.latestMessage = '';
  }
}

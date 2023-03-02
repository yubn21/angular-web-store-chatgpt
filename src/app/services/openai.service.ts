import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  openaiApiKey: string = '';

  constructor(private http: HttpClient) {}

  postMessageToTextCompletionAPI(message: string) {
    var api: string = 'https://api.openai.com/v1/completions';

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.openaiApiKey}`,
    });

    /*
      temperature: higher values like 0.8 will make the output more random
      presence_penlty: postive value increases the model's likelihood to talk about new topics.
    */
    var body = {
      model: 'text-davinci-003',
      prompt: message,
      temperature: 1,
      max_tokens: 150,
      presence_penalty: 0.6,
    };

    return this.http.post(api, body, { headers });
  }

  postMessageToChatCompletionAPI(messages: Message[]) {
    var api: string = 'https://api.openai.com/v1/chat/completions';

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.openaiApiKey}`,
    });

    var body = {
      model: 'gpt-3.5-turbo',
      messages: messages,
    };

    return this.http.post(api, body, { headers });
  }
}

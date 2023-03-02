export interface Message {
  role: string;
  content: string;
}

export interface OpenAITextCompletionResponseData {
  choices: TextCompletionResponseChoice[];
  model: string;
  object: string;
}

export interface OpenAIChatCompletionResponseData {
  id: string;
  object: string;
  choices: ChatCompletionResponseChoice[];
}

interface ChatCompletionResponseChoice {
  index: string;
  finish_reason: string;
  message: Message;
}

interface TextCompletionResponseChoice {
  text: string;
}

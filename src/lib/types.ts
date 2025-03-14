export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export interface ChatMessageProps {
  message: Message;
} 
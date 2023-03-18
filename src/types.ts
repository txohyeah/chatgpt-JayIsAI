export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface Prompt {
  id: number,
  content: string
}
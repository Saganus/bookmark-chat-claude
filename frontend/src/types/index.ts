export interface Bookmark {
  id: string;
  user_id: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
}

export interface Chat {
  id: string;
  user_id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
}

export interface Message {
  id: string;
  chat_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: Date;
}
import axios from 'axios';
import { Bookmark, Chat, Message } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBookmarks = async (): Promise<Bookmark[]> => {
  const response = await api.get('/bookmarks');
  return response.data.bookmarks || [];
};

export const createBookmark = async (bookmark: Partial<Bookmark>): Promise<Bookmark> => {
  const response = await api.post('/bookmarks', bookmark);
  return response.data;
};

export const deleteBookmark = async (id: string): Promise<void> => {
  await api.delete(`/bookmarks/${id}`);
};

export const getChats = async (): Promise<Chat[]> => {
  const response = await api.get('/chats');
  return response.data.chats || [];
};

export const createChat = async (chat: Partial<Chat>): Promise<Chat> => {
  const response = await api.post('/chats', chat);
  return response.data;
};

export const getChat = async (id: string): Promise<{ chat: Chat; messages: Message[] }> => {
  const response = await api.get(`/chats/${id}`);
  return response.data;
};

export const sendMessage = async (chatId: string, content: string): Promise<Message> => {
  const response = await api.post(`/chats/${chatId}/messages`, { content });
  return response.data;
};
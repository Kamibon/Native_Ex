
export interface Message {
  s_userId: number;
  text: string;
  time: string;
  audio?: string;
}

export interface Room {
  room_id: number;
  room_users: number[];
  message_list: Message[];
}

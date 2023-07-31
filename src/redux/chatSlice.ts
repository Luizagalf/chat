import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { getChatList, getMessages } from "../api/chat";
import { Chat } from "../interface/chat";
import { Message } from "../interface/message";

interface ChatState {
  chats: Chat[];
  selectedChatId: string | null;
  messages: Message[];
}

const initialState: ChatState = {
  chats: [],
  selectedChatId: null,
  messages: []
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats(state, action: PayloadAction<Chat[]>) {
      state.chats = action.payload;
    },
    selectChat(state, action: PayloadAction<string>) {
      state.selectedChatId = action.payload;
    },
    setMessages(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    }
  }
});

export const { setChats, selectChat, setMessages } = chatSlice.actions;
export default chatSlice.reducer;

export const fetchChats = (): AppThunk => async (dispatch) => {
  try {
    const response = await getChatList({
      offset: 0,
      limit: 7
    });
    dispatch(setChats(response.response));
    dispatch(selectChat(response.response[0].id));
    dispatch(fetchMessages(response.response[0].id));
  } catch (error) {
    console.error("Error fetching chats:", error);
  }
};

export const fetchMessages =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const response = await getMessages({
        chat_id: id,
        offset: 0,
        limit: 20
      });
      dispatch(setMessages(response.response));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

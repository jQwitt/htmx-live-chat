// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';
import { Chat } from '@prisma/client';

import { ChatInfo } from '../components';
import { Component } from '../types';

interface ChatListProps {
    chats: Chat[];
}

export const ChatList: Component<ChatListProps> = ({ chats = [] }) => (
    <section>
        <p>username</p>
        <h3>Chats:</h3>
        <div class="flex flex-col gap-1">
            {chats.map((chat) => ChatInfo({ chat }))}
        </div>
    </section>
);

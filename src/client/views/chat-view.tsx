// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';
import { Chat } from '@prisma/client';

import { Header, Footer } from '../components';
import { Component } from '../../types';

interface ChatProps {
    chat: Chat;
}

export const ChatView: Component<ChatProps> = ({ chat }) => (
    <section class="min-h-screen flex flex-col justify-between">
        {Header({ chat })}
        ... messages go here ...
        {Footer({ chatId: chat.id })}
    </section>
);

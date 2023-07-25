// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';

import { Chat } from '@prisma/client';

import { Component } from '../types';
import { ChatInfo } from './common';

interface HeaderProps {
    chat: Chat;
}

export const Header: Component<HeaderProps> = ({ chat }) => (
    <section class="flex flex-row items-center justify-between py-1 px-2">
        <div class="flex flex-row gap-3 items-center">
            <button hx-get="/chat" hx-target="#root" hx-swap="innerHTML">
                back
            </button>
            {ChatInfo({
                chat,
            })}
        </div>
        <button>settings</button>
    </section>
);

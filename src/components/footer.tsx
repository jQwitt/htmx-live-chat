// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';

import { Component } from '../types';
interface FooterProps {
    chatId: string;
}

export const Footer: Component<FooterProps> = ({ chatId }) => {
    const path = `/messages/${chatId}`;

    return (
        <section>
            <form
                class="flex flex-row gap-2 items-center justify-between py-1 px-2"
                hx-post={path}
            >
                <input
                    class="grow"
                    type="text"
                    name="message"
                    placeholder="type message here..."
                />
                <button type="submit">send</button>
            </form>
        </section>
    );
};

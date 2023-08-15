// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';

import { Component } from '../../types';
import { ChatRoutes } from '../../server/routes/chat.routes';

export const CreateChatForm: Component = () => (
    <form hx-post={ChatRoutes.CHATS}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="description" />
        <button type="submit">Create chat</button>
    </form>
);

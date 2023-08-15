// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';

import { Component } from '../types';

export enum AUTH_ROUTES {
    LOGIN = '/login',
}

export const LoginForm: Component = () => (
    <form hx-post={AUTH_ROUTES.LOGIN} hx-trigger="submit">
        <h2 class="font-bold text-3xl">Login</h2>
        <input type="text" placeholder="username" name="name" />
        <input type="text" placeholder="password" name="password" />
        <button type="submit">Login</button>
    </form>
);

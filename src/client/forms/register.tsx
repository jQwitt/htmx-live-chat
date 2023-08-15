// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';

import { Component } from '../../types';

export enum AUTH_ROUTES {
    REGISTER = '/register',
}

export const RegisterForm: Component = () => (
    <form hx-post={AUTH_ROUTES.REGISTER} hx-trigger="submit">
        <h2 class="font-bold text-3xl">Register</h2>
        <input type="text" placeholder="username" name="name" />
        <input type="text" placeholder="password" name="password" />
        <input
            type="text"
            placeholder="confirm password"
            name="confirmPassword"
        />
        <button type="submit">Register</button>
    </form>
);

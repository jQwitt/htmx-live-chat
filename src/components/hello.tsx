// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';
import { Component } from '../types';
interface HelloProps {
    name?: string;
}

export const Hello: Component<HelloProps> = ({ name }) => (
    <h1 class="text-red-400">Hello {name}!</h1>
);

import { Attributes } from '../../types';

export const getChatWithID = (id: string): Attributes => ({
    'hx-get': `/chat/${id}`,
    'hx-target': '#root',
    'hx-swap': `innerHTML`,
});

export type Component<T = object> = (args: T) => string;

export type HTMXAttributes = {
    ['hx-get']?: string;
    ['hx-swap']?: string;
    ['hx-target']?: string;
};

export type Attributes = object & HTMXAttributes;

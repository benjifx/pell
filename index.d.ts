declare module 'pell' {
    export const init = (option: InitOptions) => Pell;
    export const exec: (command: string, value?: string) => {};
};

type Pell = {
    content: HTMLElement;
}

type InitOptions = {
    element: HTMLElement,
    onChange: (html: string) => void,
    onFocus: (event: Event) => void,
    onBlur: (event: Event) => void,
    actions: Array<string | Action>
}

type Action = {
    name: string;
    icon?: string;
    title?: string;
    result: () => void
}

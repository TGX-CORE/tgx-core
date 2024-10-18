import type { WebAppInfo } from './InlineQuery';
export type ChatMenuButton = typeof MenuButton.Default | typeof MenuButton.Commands | typeof MenuButton.WebApp;
export declare namespace MenuButton {
    function Default(): string;
    function Commands(): string;
    function WebApp(text: string, web_app: WebAppInfo): string;
}

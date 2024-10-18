"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
var MenuButton;
(function (MenuButton) {
    function Default() {
        return '{ "type" : "default" }';
    }
    MenuButton.Default = Default;
    function Commands() {
        return '{ "type" : "commands" }';
    }
    MenuButton.Commands = Commands;
    function WebApp(text, web_app) {
        return JSON.stringify({ type: 'web_app', text, web_app });
    }
    MenuButton.WebApp = WebApp;
})(MenuButton || (exports.MenuButton = MenuButton = {}));
//# sourceMappingURL=MenuButton.js.map
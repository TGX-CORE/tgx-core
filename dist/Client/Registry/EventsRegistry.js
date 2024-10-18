"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRegistry = void 0;
const Client_1 = require("../../Types/Client");
const Event_1 = require("../../Classes/Event");
const Registry_1 = require("./Registry");
class EventsRegistry extends Registry_1.Registry {
    constructor(client) {
        super(client, Event_1.Event, { name: 'events' });
        this.id = Client_1.Registries.Events;
    }
}
exports.EventsRegistry = EventsRegistry;
//# sourceMappingURL=EventsRegistry.js.map
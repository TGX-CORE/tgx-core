"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxiliariesRegistry = void 0;
const Client_1 = require("../../Types/Client");
const Auxiliary_1 = require("../../Classes/Auxiliary");
const Registry_1 = require("./Registry");
class AuxiliariesRegistry extends Registry_1.Registry {
    constructor(client) {
        super(client, Auxiliary_1.Auxiliary, { name: 'auxiliaries' });
        this.id = Client_1.Registries.Auxiliaries;
    }
    async loadAll() {
        await super.loadAll();
        this.each((auxiliary) => {
            switch (auxiliary.name) {
                case Client_1.Auxiliaries.Invoices:
                    auxiliary.load(this.client.invoices);
                    break;
            }
        });
    }
}
exports.AuxiliariesRegistry = AuxiliariesRegistry;
//# sourceMappingURL=AuxilliaryRegistry.js.map
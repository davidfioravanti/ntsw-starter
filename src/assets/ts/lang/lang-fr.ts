import Lang from "./lang"
export default class LangFR implements Lang {
    readonly common: {
        readonly application: {
            readonly name: string,
            readonly version: string
        }
    }
    constructor() {
        this.common = {
            application: {
                name: "Application De Démarrage NTSW",
                version: "1.0.0",
            }
        }
    }

}
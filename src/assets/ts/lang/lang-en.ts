import Lang from "./lang"
export default class LangEN implements Lang {
    readonly common: {
        readonly application: {
            readonly name: string,
            readonly version: string
        }
    }
    constructor() {
        this.common = {
            application: {
                name: "NTSW Starter Application",
                version: "1.0.0",
            }
        }
    }

}
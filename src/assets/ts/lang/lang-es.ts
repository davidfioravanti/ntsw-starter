import Lang from "./lang"
export default class LangES implements Lang {
    readonly common: {
        readonly application: {
            readonly name: string,
            readonly version: string
        }
    }
    constructor() {
        this.common = {
            application: {
                name: "NTSW Aplicación De Inicio",
                version: "1.0.0",
            }
        }
    }

}
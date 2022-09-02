import Lang from "./lang";
import LangEN from "./lang-en";
import LangES from "./lang-es";
import LangFR from "./lang-fr";

export default class LangManager {
    language : Lang;
    static readonly EN = new LangEN();
    static readonly ES = new LangES();
    static readonly FR = new LangFR();
    constructor() {
        this.language = LangManager.EN;
    }
}
// this file is only being used by karma
import 'phantomjs-polyfill';

requireAll((<any>require).context('./', true, /spec.ts$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}

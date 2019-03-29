import { createBrowserHistory } from 'history';

class BrowserRouterClass {

    history:any;

    constructor(){
        this.history = createBrowserHistory();
    }

    push(url:string){
        this.history.push(url);
    }

}

const BrowserRouter = new BrowserRouterClass();
export default BrowserRouter;

export class BrowserRoutes {

    static BASE = '';
    static ACCOUNT = 'account';

    /* Data Type Route Chunks */



    static DEBUGGER = 'debugger';

    static get debugger(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.DEBUGGER}`;
    }

    /* Data Type Static Routes */


    static get account(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.ACCOUNT}`;
    }


}

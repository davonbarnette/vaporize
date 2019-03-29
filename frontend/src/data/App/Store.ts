import {decorate, observable} from "mobx";

class AppStoreClass {

    account:    any;

    /* Data Types */

    modal:              string|undefined;
    drawer:             string|undefined;
    src:                string|undefined;


    initialize(){

    }
}

decorate(AppStoreClass,{

    /* Data Decorators */

    modal:              observable,
    drawer:             observable,
    src:                observable,

});

const AppStore = new AppStoreClass();
export default AppStore;
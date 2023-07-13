import {makeAutoObservable} from "mobx";

class AccessControl {
    username = "";
    isAuthenticated = false;

    constructor() {
        makeAutoObservable(this);
    }

    login(username) {
        this.username = username;
        this.isAuthenticated = true;
    }

    exit() {
        this.username = "";
        this.isAuthenticated = false;
    }
}

export default new AccessControl();
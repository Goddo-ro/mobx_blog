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
        localStorage.setItem("username", this.username);
    }

    exit() {
        this.username = "";
        this.isAuthenticated = false;
        localStorage.removeItem("username");
    }

    checkStorage() {
        const username = localStorage.getItem("username");
        if (username) {
            this.username = username;
            this.isAuthenticated = true;
        }
    }
}

export default new AccessControl();
import ui from 'dorui';

class App {
    constructor() {
        this.client = this.buildApp();
    }

    buildApp() {
        return ui.div({
            id: 'App'
        });
    }
}

export default new App();
import BackgroundTimer from 'react-native-background-timer';

export default class Category {
    title = '';
    time = 0;
    icon = null;
    timer = null;

    constructor(title) {
        this.title = title || '';
    }

    startTimer() {
        this.timer = BackgroundTimer.setInterval(() => {
            this.time += 1;
        }, 1000);
    }

    stopTimer() {
        BackgroundTimer.clearInterval(this.timer);
        this.timer = null;
    }

    static fromObject(obj) {
        return Object.assign(new Category(), obj);
    }
}

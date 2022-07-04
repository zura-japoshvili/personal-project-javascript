export class Subject {
    constructor(subject) {
        const id = String(Math.floor(Math.random() * 100000));
        this.subjectId = id;
    }
    id() {
        return this.subjectId;
    }
}
export class LMS {
    constructor() {
        this.lms = new Map();
    }
    validateSub(subject) {
        if (Object.keys(subject).length < 2 || Object.keys(subject).length > 3) {
            throw new Error('1');
        }
        if (!subject.hasOwnProperty("title") || typeof subject.title !== 'string') {
            throw new Error("2");
        }
        if (!subject.hasOwnProperty("lessons") || typeof subject.lessons !== 'number') {
            throw new Error("3");
        }
        if (subject.hasOwnProperty("description") && typeof subject.description !== 'string') {
            throw new Error("4");
        }
    }
    add(data) {
        this.validateSub(data);
        this.lms.set(data.id, data);
    }
    remove(data) {
        if (!this.lms.has(data.id)) {
            throw new Error('');
        }
        this.lms.delete(data.id);
    }
    verify(data) {
        if (!this.lms.has(data.id)) {
            return false;
        }
        return true;
    }
    readAll() {
        if (arguments.length)
            throw new Error('argument was passed');
        return [...this.lms.values()];
    }
}
const history = new Subject({
    title: 'History',
    lessons: 24
});
console.log(history);
const lms = new LMS();
lms.add(history);

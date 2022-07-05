"use strict";
// interface SubjectInt{
//     id?: string,
//     title: string,
//     lessons: number,
//     description?: string,
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = exports.Subject = void 0;
class Subject {
    constructor(data) {
        this.tittle = data.title;
        this.lessons - data.lessons;
        if (data.description) {
            this.description = data.description;
        }
        const id = Math.floor(Math.random() * Date.now()).toString();
        this.subjectId = id;
        return Object.assign({ id }, data);
    }
    id() {
        return this.subjectId;
    }
}
exports.Subject = Subject;
class LMS {
    constructor() {
        this.lms = new Map();
    }
    add(data) {
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
exports.LMS = LMS;
const history = new Subject({
    title: "History",
    lessons: 24
});
console.log(history);
const lms = new LMS();
lms.add(history);

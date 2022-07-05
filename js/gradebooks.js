"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeBooks = void 0;
;
class GradeBooks {
    constructor(groups, teachers, lms) {
        this.counter = 0;
        this.gradebook = new Map();
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    add(groupId) {
        let checker = false;
        this.groups.forEach(group => {
            if (group.id === groupId) {
                checker = true;
            }
        });
        if (!checker)
            throw new Error("");
        const id = String(this.counter++);
        this.gradebook.set(id, []);
        return id;
    }
    addRecord(gradeBookId, record) {
        if (!this.gradebook.has(gradeBookId)) {
            throw new Error('');
        }
        let data = this.gradebook.get(gradeBookId);
        data.push(record);
    }
    getRecord(data) {
        let teacherName = this.teachers[data.teacherId].name.first + " " + this.teachers[data.teacherId].name.last;
        let subjectName = '';
        this.lms.forEach(value => {
            if (value.id === data.subjectId) {
                subjectName = value.title;
            }
        });
        return {
            teacher: teacherName,
            subject: subjectName,
            lesson: data.lesson,
            mark: data.mark
        };
    }
    getName(data) {
        let pupilName = '';
        this.groups.forEach(value => {
            value.pupils.forEach(pupil => {
                if (data.pupilId === pupil.id && !pupilName) {
                    pupilName = `${pupil.name.first} ${pupil.name.last}`;
                }
            });
        });
        return pupilName;
    }
    read(gradeBookId, pupilId) {
        if (!this.gradebook.has(gradeBookId)) {
            throw new Error('');
        }
        const data = this.gradebook.get(gradeBookId);
        let pupilName = '';
        let pupilArr = [];
        data.forEach(value => {
            if (value.pupilId === pupilId) {
                pupilArr.push(this.getRecord(value));
            }
            if (!pupilName) {
                pupilName = this.getName(value);
            }
        });
        return {
            name: pupilName,
            record: pupilArr
        };
    }
    readAll(gradeBookId) {
        if (!this.gradebook.has(gradeBookId)) {
            throw new Error('');
        }
        const data = this.gradebook.get(gradeBookId);
        return [...data];
    }
    clear() {
        this.gradebook.clear();
    }
}
exports.GradeBooks = GradeBooks;

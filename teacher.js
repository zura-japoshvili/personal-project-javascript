export class Teachers {
    constructor() {
        this.counter = 0;
        this.teacher = new Map();
    }
    validateTeacher(data) {
        if (!data.hasOwnProperty("name")) {
            throw new Error("");
        }
        else {
            if (!data.name.hasOwnProperty("first") || typeof data.name.first !== "string") {
                throw new TypeError("");
            }
            if (!data.name.hasOwnProperty("last") || typeof data.name.last !== "string") {
                throw new TypeError("");
            }
        }
        if (!data.hasOwnProperty("dateOfBirth")) {
            throw new TypeError("");
        }
        else {
            let date_regex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
            date_regex.test(data.dateOfBirth);
            if (!date_regex) {
                throw new Error('');
            }
        }
        if (!data.hasOwnProperty("phones")) {
            throw new Error('');
        }
        else {
            data.phones.forEach(phones => {
                let count = 0;
                if (!phones.phone || typeof phones.phone !== 'string') {
                    throw new TypeError("");
                }
                if (!phones.primary || typeof phones.primary !== 'boolean') {
                    throw new TypeError("");
                }
                if (phones.primary === true) {
                    count++;
                }
                if (count > 1) {
                    throw new Error("");
                }
            });
        }
        if (!data.hasOwnProperty("emails")) {
            throw new Error('');
        }
        else {
            data.emails.forEach(emails => {
                let count = 0;
                if (!emails.email || typeof emails.email !== 'string') {
                    throw new TypeError("");
                }
                if (!emails.primary || typeof emails.primary !== 'boolean') {
                    throw new TypeError("");
                }
                if (emails.primary === true) {
                    count++;
                }
                if (emails > 1) {
                    throw new Error("");
                }
            });
        }
        if (!data.hasOwnProperty('sex') || typeof data.sex !== 'string') {
            throw new TypeError('');
        }
        if (!data.hasOwnProperty('subjects')) {
            throw new Error('');
        }
        else {
            data.subjects.forEach(subjects => {
                if (typeof subjects.subject !== 'string') {
                    throw new TypeError('');
                }
            });
        }
        if (data.hasOwnProperty("description") && typeof data.description !== 'string') {
            throw new TypeError("");
        }
    }
    add(teacher) {
        this.validateTeacher(teacher);
        const id = String(this.counter++);
        this.teacher.set(id, teacher);
        return id;
    }
    read(id) {
        if (typeof id !== 'string')
            throw new Error('not a string');
        const foundTeacher = this.teacher.get(id);
        return foundTeacher ? Object.assign(Object.assign({}, foundTeacher), { id }) : null;
    }
    update(id, updateTeacher) {
        this.validateTeacher(updateTeacher);
        const foundTeacher = this.read(id);
        delete foundTeacher.id;
        this.teacher.set(id, Object.assign(Object.assign({}, foundTeacher), updateTeacher));
    }
    remove(id) {
        if (!this.teacher.has(id)) {
            throw new Error('');
        }
        this.teacher.delete(id);
    }
    readAll() {
        if (arguments.length)
            throw new Error('argument was passed');
        return [...this.teacher.values()];
    }
}
const teacher2 = {
    name: {
        first: "Shnana",
        last: "Shgvarishvili"
    },
    dateOfBirth: "02/02/1991",
    emails: [
        {
            email: "ShnanaGvar@gmail.com",
            primary: true
        }
    ],
    phones: [
        {
            "phone": "568-68-68-68",
            "primary": true
        }
    ],
    sex: "Female",
    subjects: [
        {
            subject: "Math" // just name property of subject.
        }
    ],
    // description: "",
};
const teachers = new Teachers();
const teacher_1_Id = teachers.add(teacher2);
console.log(teachers.readAll());

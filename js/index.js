"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lms_js_1 = require("./lms.js");
const pupils_js_1 = require("./pupils.js");
const teacher_js_1 = require("./teacher.js");
const groups_js_1 = require("./groups.js");
const gradebooks_js_1 = require("./gradebooks.js");
// const history = new Subject({
//     title: 'History',
//     lessons: 24
// });
// const math = new Subject({
//   title: 'Math',
//   lessons: 24
// });
const pupil_1 = {
    "name": {
        "first": "Lana",
        "last": "LanaGvari"
    },
    "dateOfBirth": "02/02/2002",
    "phones": [
        {
            "phone": "568 20 20 20",
            "primary": true
        }
    ],
    "sex": "Female",
    "description": ""
};
const pupil_2 = {
    "name": {
        "first": "ShLana",
        "last": "ShLanaGvari"
    },
    "dateOfBirth": "02/02/2002",
    "phones": [
        {
            "phone": "568 20 20 20",
            "primary": true
        }
    ],
    "sex": "Female",
    "description": ""
};
const teacher1 = {
    "name": {
        "first": "Nana",
        "last": "Gvarishvili"
    },
    "dateOfBirth": "02/02/1991",
    "emails": [
        {
            "email": "nanaGvar@gmail.com",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "568-68-68-68",
            "primary": true
        }
    ],
    "sex": "Female",
    "subjects": [
        {
            "subject": "History" // just name property of subject.
        }
    ],
    // "description": "",
};
const teacher2 = {
    "name": {
        "first": "Shnana",
        "last": "Shgvarishvili"
    },
    "dateOfBirth": "02/02/1991",
    "emails": [
        {
            "email": "ShnanaGvar@gmail.com",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "568-68-68-68",
            "primary": true
        }
    ],
    "sex": "Female",
    "subjects": [
        {
            "subject": "Math" // just name property of subject.
        }
    ],
    // "description": "",
};
const lms = new lms_js_1.LMS();
// lms.add(history);
// lms.add(math);
// console.log(lms.verify(history));
// console.log(lms.readAll());
const pupils = new pupils_js_1.Pupils();
const pupil1 = pupils.add(pupil_1);
const pupil2 = pupils.add(pupil_2);
const teachers = new teacher_js_1.Teachers();
const teacher_1_Id = teachers.add(teacher1);
const teacher_2_Id = teachers.add(teacher2);
const groups = new groups_js_1.Groups();
const groupID = groups.add(224);
groups.addPupil(groupID, pupils.read('0'));
groups.addPupil(groupID, pupils.read('1'));
groups.update('0', {
    room: 237
});
const gradebooks = new gradebooks_js_1.GradeBooks(groups.readAll(), teachers.readAll(), lms.readAll());
const gradeBooksId = gradebooks.add('0');
console.log(gradeBooksId);
// const record_1 = {
//   pupilId: '0',
//   teacherId: '0',
//   subjectId: history.id,
//   lesson: 1,
//   mark: 9
// };
// const record_2 = {
//   pupilId: '1',
//   teacherId: '2',
//   subjectId: math.id,
//   lesson: 1,
//   mark: 9
// };
// gradebooks.addRecord(gradeBooksId, record_1);
// gradebooks.addRecord(gradeBooksId, record_2);
// console.log(gradebooks.read(gradeBooksId, pupil1));
// console.log(gradebooks.readAll(gradeBooksId));

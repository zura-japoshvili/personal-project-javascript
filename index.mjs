import { Subject } from "./lms.mjs";
import { LMS } from "./lms.mjs";
import { Pupils } from "./pupils.mjs";
import { Teachers } from "./teacher.mjs";
import { Groups } from "./groups.mjs";
import { GradeBooks } from "./gradebooks.mjs";

const history = new Subject({
    title: 'History',
    lessons: 24
});
const pupil_1 = {
    "name": {
      "first": "Lana",
      "last": "LanaGvari"
    },
    "dateOfBirth": "02/02/2002", // format date
    "phones": [
      {
        "phone": "568 20 20 20",
        "primary": true
      }
    ],
    "sex": "Female", // male OR female
    "description": ""
  }

  const teacher1 = {
    "name": {
        "first": "Nana",
        "last": "Gvarishvili"
    },
    "dateOfBirth": "02/02/1991", // format date
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
    "sex": "Female", // male or female
    "subjects": [
        {
        "subject": "History" // just name property of subject.
        }
    ],
    // "description": "",
}

const lms = new LMS();
lms.add(history);
console.log(lms.verify(history));
console.log(lms.readAll());

const pupils = new Pupils();
const pupil = pupils.add(pupil_1);

const teachers = new Teachers();
const teacherId = teachers.add(teacher1);

const groups = new Groups();
const groupID = groups.add(224);
groups.addPupil(groupID, pupils.read('0'));
groups.addPupil(groupID, pupils.read('0'));
groups.update('0', {
    room: 237
  });
console.log(groups.readAll());

const gradebooks = new GradeBooks(groups.readAll(), teachers.readAll(), lms.readAll());



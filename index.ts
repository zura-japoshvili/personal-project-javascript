import { Subject } from "./lms.js";
import { LMS } from "./lms.js";
import { Pupils } from "./pupils.js";
import { Teachers } from "./teacher.js";
import { Groups } from "./groups.js";
import { GradeBooks } from "./gradebooks.js";




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

  const pupil_2 = {
    "name": {
      "first": "ShLana",
      "last": "ShLanaGvari"
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
const teacher2 = {
  "name": {
      "first": "Shnana",
      "last": "Shgvarishvili"
  },
  "dateOfBirth": "02/02/1991", // format date
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
  "sex": "Female", // male or female
  "subjects": [
      {
      "subject": "Math" // just name property of subject.
      }
  ],
  // "description": "",
}



const lms = new LMS();
// lms.add(history);
// lms.add(math);
// console.log(lms.verify(history));
// console.log(lms.readAll());

const pupils = new Pupils();
const pupil1 = pupils.add(pupil_1);
const pupil2 = pupils.add(pupil_2);

const teachers = new Teachers();
const teacher_1_Id = teachers.add(teacher1);
const teacher_2_Id = teachers.add(teacher2);

const groups = new Groups();
const groupID = groups.add(224);
groups.addPupil(groupID, pupils.read('0'));
groups.addPupil(groupID, pupils.read('1'));
groups.update('0', {
    room: 237
  });


const gradebooks = new GradeBooks(groups.readAll(), teachers.readAll(), lms.readAll());

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

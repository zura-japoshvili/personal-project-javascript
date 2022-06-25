class Teachers{
    #counter = 0;
    #teacher = new Map();
    #validateTeacher(data){
        if(!data.name.hasOwnProperty("first") || typeof data.name.first !== "string"){
            throw new TypeError("");
        }
        if(!data.name.hasOwnProperty("last") || typeof data.name.last !== "string"){
            throw new TypeError("");
        }
        if(!data.hasOwnProperty("dateOfBirth") || typeof data.dateOfBirth !== "string" 
        ||  !Date.parse(data.dateOfBirth)){
            throw new TypeError("");
        }
        if(!data.hasOwnProperty("emails")){
            throw new Error('');
        }else{
            data.emails.forEach(emails => {
                if(!emails.email || typeof emails.email !== 'string'){
                    throw new TypeError("");
                }
                if(!emails.primary || typeof emails.primary !== 'boolean'){
                    throw new TypeError("");
                }
            });
        }

        if(!data.hasOwnProperty('sex') || typeof data.sex !== 'string'){
            throw new TypeError('');
        }
        if(!data.hasOwnProperty('subjects')){
            throw new Error('');
        }else{
            data.subjects.forEach(subjects => {
                if(typeof subjects.subject !== 'string'){
                    throw new TypeError('');
                }
            });
        }
        if(data.hasOwnProperty("description") && typeof data.description !== 'string'){
            throw new TypeError("");
        }
    }
    add(teacher){
        this.#validateTeacher(teacher);
        const id = String(this.#counter++);
        this.#teacher.set(id, teacher);
        return id;
    }

    read(id){
        if(typeof id !== 'string') throw new Error('not a string')
        const foundTeacher = this.#teacher.get(id);
        return foundTeacher ? {...foundTeacher, id} : null;
    }
    update(id, updateTeacher){
        this.#validateTeacher(updateTeacher);
        const foundTeacher = this.read(id);
        delete foundTeacher.id;
        this.#teacher.set(id, {
            ...foundTeacher,
            ...updateTeacher
        });
    }
    remove(id){
        if(!this.#teacher.has(id)){
            throw new Error('')
        }
        this.#teacher.delete(id);
    }
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
const teachers = new Teachers();
const teacherId = teachers.add(teacher1);


console.log(teachers.read(teacherId));
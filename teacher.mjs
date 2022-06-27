export class Teachers{
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
        if(!data.hasOwnProperty("phones")){
            throw new Error('');
        }else{
            data.phones.forEach(phones => {
                if(!phones.phone || typeof phones.phone !== 'string'){
                    throw new TypeError("");
                }
                if(!phones.primary || typeof phones.primary !== 'boolean'){
                    throw new TypeError("");
                }
            });
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


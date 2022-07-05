interface TeachersInt {
    name: {
        first: string,
        last: string
    },
    dateOfBirth: string, // format date
    emails:
        {
            email: string,
            primary: boolean
        }[],
    phones:
        {
            phone: string,
            primary: boolean
        }[],
    sex: string, // male or female
    subjects:
        {
        subject: string // just name property of subject.
        }[],
    description?: string
}


export class Teachers{
    private counter = 0;
    private teacher = new Map();
    private validateTeacher(data){
        if(!data.hasOwnProperty("dateOfBirth")){
            throw new TypeError("");
        }else{
            let date_regex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
            date_regex.test(data.dateOfBirth);
            if(!date_regex){
                throw new Error('');
            }
        }
        if(!data.hasOwnProperty("phones")){
            throw new Error('');
        }else{
            data.phones.forEach(phones => {
                let count = 0;
                if(phones.primary === true){
                    count++;
                }
                if(count > 1){
                    throw new Error("");
                }
            });
        }
        if(!data.hasOwnProperty("emails")){
            throw new Error('');
        }else{
            data.emails.forEach(emails => {
                let count = 0;
                if(emails.primary === true){
                    count++;
                }
                if(emails > 1){
                    throw new Error("");
                }
            });
        }
    }
    public add(teacher: TeachersInt): string{
        this.validateTeacher(teacher);
        const id = String(this.counter++);
        this.teacher.set(id, teacher);
        return id;
    }

    public read<T extends string>(id: T){
        const foundTeacher = this.teacher.get(id);
        return foundTeacher ? {...foundTeacher, id} : null;
    }
    public update(id: string, updateTeacher: TeachersInt){
        this.validateTeacher(updateTeacher);
        const foundTeacher = this.read(id);
        delete foundTeacher.id;
        this.teacher.set(id, {
            ...foundTeacher,
            ...updateTeacher
        });
    }
    public remove(id: string): void{
        if(!this.teacher.has(id)){
            throw new Error('')
        }
        this.teacher.delete(id);
    }
    public readAll(): TeachersInt[]{
        if(arguments.length) throw new Error('argument was passed');
        return [...this.teacher.values()];
    }
}


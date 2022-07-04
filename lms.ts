interface SubjectInt{
    title: string,
    lessons: number,
    description?: string,
    id?: string 
}

export class Subject {
    private subjectId: string;
    constructor(subject: SubjectInt){
        const id = String(Math.floor(Math.random() * 100000));
        this.subjectId = id;
    }
    public id(): string{
        return this.subjectId;
    }
}
export class LMS {
    private lms = new Map();
    private validateSub(subject){
        if(Object.keys(subject).length < 2 || Object.keys(subject).length > 3){
            throw new Error('1');
        }
        if(!subject.hasOwnProperty("title") || typeof subject.title !== 'string'){
            throw new Error("2");
        }
        if(!subject.hasOwnProperty("lessons") || typeof subject.lessons !== 'number'){
            throw new Error("3");
        }
        if(subject.hasOwnProperty("description") && typeof subject.description !== 'string'){
            throw new Error("4");
        }
    }

    public add(data: SubjectInt): void{
        this.validateSub(data)
        this.lms.set(data.id, data);
    }
    public remove(data: SubjectInt):  void{
        if(!this.lms.has(data.id)){
            throw new Error('')
        }
        this.lms.delete(data.id);
    }
    public verify(data: SubjectInt): boolean{
        if(!this.lms.has(data.id)){
            return false;
        }
        return true;
    }
    public readAll(){
        if(arguments.length) throw new Error('argument was passed');
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
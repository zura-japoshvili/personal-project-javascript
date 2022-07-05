// interface SubjectInt{
//     id?: string,
//     title: string,
//     lessons: number,
//     description?: string,
// }

export class Subject {
    tittle: string;
    lessons: number;
    description?: string;
    private subjectId: string;
    constructor(data){
        this.tittle = data.title;
        this.lessons - data.lessons;
        if(data.description){
            this.description = data.description;
        }
        const id: string = Math.floor(Math.random() * Date.now()).toString();
        this.subjectId = id;
        return {id, ...data}
    }
    public id(): string{
        return this.subjectId;
    }
}
export class LMS {
    private lms = new Map();

    public add(data: Subject): void{
        this.lms.set(data.id, data);
    }
    public remove(data: Subject):  void{
        if(!this.lms.has(data.id)){
            throw new Error('')
        }
        this.lms.delete(data.id);
    }
    public verify(data: Subject): boolean{
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
    title: "History",
    lessons: 24
});
console.log(history);

const lms = new LMS();
lms.add(history);


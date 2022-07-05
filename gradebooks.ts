interface RecordInt  {
  pupilId: string,
  teacherId: string,
  subjectId: string,
  lesson: number,
  mark: number
};
export class GradeBooks {
    private counter = 0;
    private gradebook = new Map();
    private groups;
    private teachers;
    private lms;
    constructor(groups, teachers, lms){
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    public add(groupId: string): string{
        let checker = false;
        this.groups.forEach(group => {
            if(group.id === groupId){
                checker = true;
            }
        });
        if(!checker) throw new Error("");
        const id = String(this.counter++);
        this.gradebook.set(id, []);
        return id;
    }
    public addRecord(gradeBookId: string, record: RecordInt){
        if(!this.gradebook.has(gradeBookId)){
            throw new Error('');
        }
        let data = this.gradebook.get(gradeBookId);
        data.push(record);
    }

    private getRecord(data){
        let teacherName = this.teachers[data.teacherId].name.first + " " + this.teachers[data.teacherId].name.last;
        let subjectName = '';
        this.lms.forEach(value => {
            if(value.id === data.subjectId){
                subjectName = value.title;
            }
        })
        return {
            teacher: teacherName,
            subject: subjectName,
            lesson: data.lesson,
            mark: data.mark
        }
    }
    private getName(data){
        let pupilName = '';
        this.groups.forEach(value => {
            value.pupils.forEach(pupil => {
                if(data.pupilId === pupil.id && !pupilName){
                    pupilName = `${pupil.name.first} ${pupil.name.last}`;
                }
            })
        })
        return pupilName;
    }

    public read(gradeBookId: string, pupilId: object): object{
        if(!this.gradebook.has(gradeBookId)){
            throw new Error('');
        }
        const data = this.gradebook.get(gradeBookId);
        let pupilName = '';

        let pupilArr = [];
        data.forEach(value => {
            if(value.pupilId === pupilId){
                pupilArr.push(this.getRecord(value));
            }
            if(!pupilName){
                pupilName = this.getName(value);
            }
        })
        return {
            name: pupilName,
            record: pupilArr
        }
    }
    public readAll(gradeBookId: string): object[]{
        if(!this.gradebook.has(gradeBookId)){
            throw new Error('');
        }
        const data = this.gradebook.get(gradeBookId);

        return [...data];
    }
    public clear(): void{
        this.gradebook.clear();
    }
}

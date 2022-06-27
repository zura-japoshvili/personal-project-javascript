export class GradeBooks {
    #gradebook = new Map();
    constructor(groups, teachers, lms){
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;

    }
    // const record = {
    //     pupilId: pupilId,
    //     teacherId: teacherId,
    //     subjectId: history.id,
    //     lesson: 1,
    //     mark: 9
    //   };
    #validateRecord(record){
        if(Object.keys(record).length !== 5){
            throw new Error("");
        }
        if(!record.hasOwnProperty('pupilId')){
            throw new Error('');
        }
        if(!record.hasOwnProperty('teacherId')){
            throw new Error('');
        }
        if(!record.hasOwnProperty('subjectId')){
            throw new Error('');
        }
        if(!record.hasOwnProperty('lesson')){
            throw new Error('');
        }
        if(!record.hasOwnProperty('mark')){
            throw new Error('');
        }
    }
    add(groupId){
        let checker = false;
        this.groups.forEach(group => {
            if(group.id === groupId){
                checker = true;
            }
        });
        if(!checker) throw new Error("");
        this.#gradebook.set(groupId, {});
        return id;
    }
    addRecord(record){

    }
}


interface pupilVal{
    name: {
        first: string,
        last: string
    }
    dateOfBirth: string,
    phones: 
        {
            phone: string,
            primary: boolean
        }[],
    sex: string,
    description?: string
}
export class Groups {
    private counter = 0;
    private groups = new Map();
    public add(room: number){
        const id = String(this.counter++);
        const pupils = [];
        this.groups.set(id , {id, room, pupils});
        return id;
    }
    public addPupil(roomId: string, pupil: pupilVal){
        if(!this.groups.has(roomId)){
            throw new Error("");
        }
        const room = this.groups.get(roomId);
        room.pupils.push(pupil);
        return room;
    }
    public removePupil(roomId: string, pupilId:string){
        if(!this.groups.has(roomId)){
            throw new Error("");
        }
        const room = this.groups.get(roomId);
        room.pupils.forEach((pupil,index) => {
            if(pupil.id === pupilId){
                room.pupils.splice(index, 1);
            }
        });
        return room;
    }
    public update(groupId: string, data: {room: number}){
        const foundGroup = this.read(groupId);
        delete foundGroup.groupId;
        this.groups.set(groupId, {
            ...foundGroup,
            ...data
        });
    }
    public read<T extends string>(id: T){
        const foundRoom = this.groups.get(id);
        return foundRoom ? {...foundRoom, id} : null;
    }
    public readAll(): object[]{
        return [...this.groups.values()];
    }
}


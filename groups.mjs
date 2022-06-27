export class Groups {
    #counter = 0;
    #groups = new Map();
    add(room){
        if(typeof room !== 'number') throw new TypeError("");
        const id = String(this.#counter++);
        const pupils = [];
        this.#groups.set(id , {id, room, pupils});
        return id;
    }
    addPupil(roomId, pupil){
        if(!this.#groups.has(roomId)){
            throw new Error("");
        }
        const room = this.#groups.get(roomId);
        room.pupils.push(pupil);
        return room;
    }
    removePupil(roomId, pupilId){
        if(!this.#groups.has(roomId)){
            throw new Error("");
        }
        const room = this.#groups.get(roomId);
        room.pupils.forEach((pupil,index) => {
            if(pupil.id === pupilId){
                room.pupils.splice(index, 1);
            }
        });
        return room;
    }
    update(groupId, data){
        if(Object.keys(data).length !== 1 || !data.hasOwnProperty("room") 
            || typeof data.room !== 'number'){
            throw new Error('');
        }
        const foundGroup = this.read(groupId);
        delete foundGroup.groupId;
        this.#groups.set(groupId, {
            ...foundGroup,
            ...data
        });
    }
    read(id){
        if(typeof id !== 'string') throw new Error('not a string')
        const foundRoom = this.#groups.get(id);
        return foundRoom ? {...foundRoom, id} : null;
    }
    readAll(){
        if(arguments.length) throw new Error('argument was passed')
        return [...this.#groups.values()];
    }
}


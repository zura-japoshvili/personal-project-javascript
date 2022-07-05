"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
class Groups {
    constructor() {
        this.counter = 0;
        this.groups = new Map();
    }
    add(room) {
        const id = String(this.counter++);
        const pupils = [];
        this.groups.set(id, { id, room, pupils });
        return id;
    }
    addPupil(roomId, pupil) {
        if (!this.groups.has(roomId)) {
            throw new Error("");
        }
        const room = this.groups.get(roomId);
        room.pupils.push(pupil);
        return room;
    }
    removePupil(roomId, pupilId) {
        if (!this.groups.has(roomId)) {
            throw new Error("");
        }
        const room = this.groups.get(roomId);
        room.pupils.forEach((pupil, index) => {
            if (pupil.id === pupilId) {
                room.pupils.splice(index, 1);
            }
        });
        return room;
    }
    update(groupId, data) {
        const foundGroup = this.read(groupId);
        delete foundGroup.groupId;
        this.groups.set(groupId, Object.assign(Object.assign({}, foundGroup), data));
    }
    read(id) {
        const foundRoom = this.groups.get(id);
        return foundRoom ? Object.assign(Object.assign({}, foundRoom), { id }) : null;
    }
    readAll() {
        return [...this.groups.values()];
    }
}
exports.Groups = Groups;

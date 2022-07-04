var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Groups_counter, _Groups_groups;
export class Groups {
    constructor() {
        _Groups_counter.set(this, 0);
        _Groups_groups.set(this, new Map());
    }
    add(room) {
        var _a, _b;
        if (typeof room !== 'number')
            throw new TypeError("");
        const id = String((__classPrivateFieldSet(this, _Groups_counter, (_b = __classPrivateFieldGet(this, _Groups_counter, "f"), _a = _b++, _b), "f"), _a));
        const pupils = [];
        __classPrivateFieldGet(this, _Groups_groups, "f").set(id, { id, room, pupils });
        return id;
    }
    addPupil(roomId, pupil) {
        if (!__classPrivateFieldGet(this, _Groups_groups, "f").has(roomId)) {
            throw new Error("");
        }
        const room = __classPrivateFieldGet(this, _Groups_groups, "f").get(roomId);
        room.pupils.push(pupil);
        return room;
    }
    removePupil(roomId, pupilId) {
        if (!__classPrivateFieldGet(this, _Groups_groups, "f").has(roomId)) {
            throw new Error("");
        }
        const room = __classPrivateFieldGet(this, _Groups_groups, "f").get(roomId);
        room.pupils.forEach((pupil, index) => {
            if (pupil.id === pupilId) {
                room.pupils.splice(index, 1);
            }
        });
        return room;
    }
    update(groupId, data) {
        if (Object.keys(data).length !== 1 || !data.hasOwnProperty("room")
            || typeof data.room !== 'number') {
            throw new Error('');
        }
        const foundGroup = this.read(groupId);
        delete foundGroup.groupId;
        __classPrivateFieldGet(this, _Groups_groups, "f").set(groupId, Object.assign(Object.assign({}, foundGroup), data));
    }
    read(id) {
        if (typeof id !== 'string')
            throw new Error('not a string');
        const foundRoom = __classPrivateFieldGet(this, _Groups_groups, "f").get(id);
        return foundRoom ? Object.assign(Object.assign({}, foundRoom), { id }) : null;
    }
    readAll() {
        if (arguments.length)
            throw new Error('argument was passed');
        return [...__classPrivateFieldGet(this, _Groups_groups, "f").values()];
    }
}
_Groups_counter = new WeakMap(), _Groups_groups = new WeakMap();

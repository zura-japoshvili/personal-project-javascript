"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
class Pupils {
    constructor() {
        this.counter = 0;
        this.pupils = new Map();
    }
    validatePupil(data) {
        if (!data.hasOwnProperty("dateOfBirth")) {
            throw new TypeError("");
        }
        else {
            let date_regex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
            date_regex.test(data.dateOfBirth);
            if (!date_regex) {
                throw new Error('');
            }
        }
        if (!data.hasOwnProperty("phones")) {
            throw new Error('');
        }
        else {
            data.phones.forEach(phones => {
                let count = 0;
                if (phones.primary === true) {
                    count++;
                }
                if (count > 1) {
                    throw new Error("");
                }
            });
        }
    }
    add(pupil) {
        this.validatePupil(pupil);
        const id = String(this.counter++);
        this.pupils.set(id, pupil);
        return { id, pupil };
    }
    read(id) {
        const foundPupil = this.pupils.get(id);
        return foundPupil ? Object.assign({ id }, foundPupil) : null;
    }
    update(id, updatePupil) {
        this.validatePupil(updatePupil);
        const foundPupil = this.read(id);
        delete foundPupil.id;
        this.pupils.set(id, Object.assign(Object.assign({}, foundPupil), updatePupil));
    }
    remove(id) {
        if (!this.pupils.has(id)) {
            throw new Error('');
        }
        this.pupils.delete(id);
    }
}
exports.Pupils = Pupils;

export class Pupils {
    constructor() {
        this.counter = 0;
        this.pupils = new Map();
    }
    validatePupil(data) {
        if (!data.hasOwnProperty("name")) {
            throw new Error("");
        }
        else {
            if (!data.name.hasOwnProperty("first")) {
                throw new TypeError("");
            }
            if (!data.name.hasOwnProperty("last")) {
                throw new TypeError("");
            }
        }
        if (!data.hasOwnProperty("dateOfBirth")
            || !Date.parse(data.dateOfBirth)) {
            throw new TypeError("");
        }
        if (!data.hasOwnProperty("phones")) {
            throw new Error('');
        }
        else {
            data.phones.forEach(phones => {
                let count = 0;
                if (!phones.phone || typeof phones.phone !== 'string') {
                    throw new TypeError("");
                }
                if (!phones.primary || typeof phones.primary !== 'boolean') {
                    throw new TypeError("");
                }
                if (phones.primary === true) {
                    count++;
                }
                if (count > 1) {
                    throw new Error("");
                }
            });
        }
        if (!data.hasOwnProperty('sex') || typeof data.sex !== 'string') {
            throw new TypeError('');
        }
        if (data.hasOwnProperty("description") && typeof data.description !== 'string') {
            throw new TypeError("");
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
        return foundPupil ? Object.assign(Object.assign({}, foundPupil), { id }) : null;
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
const pupil_1 = {
    "name": {
        "first": "Lana",
        "last": "LanaGvari"
    },
    "dateOfBirth": "02/02/2002",
    "phones": [
        {
            "phone": "568 20 20 20",
            "primary": true
        }
    ],
    "sex": "Female",
    "description": ""
};
const pupil_2 = {
    "name": {
        "first": "ShLana",
        "last": "ShLanaGvari"
    },
    "dateOfBirth": "02/02/2002",
    "phones": [
        {
            "phone": "568 20 20 20",
            "primary": true
        }
    ],
    "sex": "Female",
    "description": ""
};
const pupils = new Pupils();
const pupil1 = pupils.add(pupil_1);
const pupil2 = pupils.add(pupil_2);

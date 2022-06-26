class Pupils{
    #counter = 0;
    #pupils = new Map();
    #validatePupil(data){
        if(!data.name.hasOwnProperty("first") || typeof data.name.first !== "string"){
            throw new TypeError("");
        }
        if(!data.name.hasOwnProperty("last") || typeof data.name.last !== "string"){
            throw new TypeError("");
        }
        if(!data.hasOwnProperty("dateOfBirth") || typeof data.dateOfBirth !== "string" 
        ||  !Date.parse(data.dateOfBirth)){
            throw new TypeError("");
        }
        if(!data.hasOwnProperty("phones")){
            throw new Error('');
        }else{
            data.phones.forEach(phones => {
                if(!phones.phone || typeof phones.phone !== 'string'){
                    throw new TypeError("");
                }
                if(!phones.primary || typeof phones.primary !== 'boolean'){
                    throw new TypeError("");
                }
            });
        }
        if(!data.hasOwnProperty('sex') || typeof data.sex !== 'string'){
            throw new TypeError('');
        }
        if(data.hasOwnProperty("description") && typeof data.description !== 'string'){
            throw new TypeError("");
        }
    }
    add(pupil){
        this.#validatePupil(pupil);
        const id = String(this.#counter++);
        this.#pupils.set(id, pupil);
        return id;
    }

    read(id){
        if(typeof id !== 'string') throw new Error('not a string')
        const foundPupil = this.#pupils.get(id);
        return foundPupil ? {...foundPupil, id} : null;
    }
    update(id, updatePupil){
        this.#validatePupil(updatePupil);
        const foundPupil = this.read(id);
        delete foundPupil.id;
        this.#pupils.set(id, {
            ...foundPupil,
            ...updatePupil
        });
    }
    remove(id){
        if(!this.#pupils.has(id)){
            throw new Error('')
        }
        this.#pupils.delete(id);
    }
}

const pupil_1 = {
    "name": {
      "first": "Lana",
      "last": "LanaGvari"
    },
    "dateOfBirth": "02/02/2002", // format date
    "phones": [
      {
        "phone": "568 20 20 20",
        "primary": true
      }
    ],
    "sex": "Female", // male OR female
    "description": ""
  }

const pupils = new Pupils();
const pupil = pupils.add(pupil_1);
console.log(pupils.read(pupil));
interface pupilVal{
    name: {
        first: string,
        last: string
    }
    dateOfBirth: string,
    phones: [
        {
            phone: string,
            primary: boolean
        }
    ],
    sex: string,
    description: string
}
export class Pupils{
    private counter: number = 0;
    private pupils = new Map();
    private validatePupil(data){
        if(!data.hasOwnProperty("name")){
            throw new Error("");
        }else{
            if(!data.name.hasOwnProperty("first")){
                throw new TypeError("");
            }
            if(!data.name.hasOwnProperty("last")){
                throw new TypeError("");
            }
        }
        if(!data.hasOwnProperty("dateOfBirth") 
        ||  !Date.parse(data.dateOfBirth)){
            throw new TypeError("");
        }
        if(!data.hasOwnProperty("phones")){
            throw new Error('');
        }else{
            data.phones.forEach(phones => {
                let count = 0;
                if(!phones.phone){
                    throw new TypeError("");
                }
                if(!phones.primary){
                    throw new TypeError("");
                }
                if(phones.primary === true){
                    count++;
                }
                if(count > 1){
                    throw new Error("");
                }
            });
        }
        if(!data.hasOwnProperty('sex')){
            throw new TypeError('');
        }
        if(data.hasOwnProperty("description")){
            throw new TypeError("");
        }
    }
    add(pupil:object){
        this.validatePupil(pupil);
        const id = String(this.counter++);
        this.pupils.set(id, pupil);
        return {id, pupil};
    }

    read(id:string){
        const foundPupil = this.pupils.get(id);
        return foundPupil ? {...foundPupil, id} : null;
    }
    update(id: string, updatePupil:object){
        this.validatePupil(updatePupil as pupilVal);
        const foundPupil = this.read(id);
        delete foundPupil.id;
        this.pupils.set(id, {
            ...foundPupil,
            ...updatePupil
        });
    }
    remove(id:string){
        if(!this.pupils.has(id)){
            throw new Error('')
        }
        this.pupils.delete(id);
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

  const pupil_2 = {
    "name": {
      "first": "ShLana",
      "last": "ShLanaGvari"
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
const pupil1 = pupils.add(pupil_1 as pupilVal);
pupils.read('1');
const pupil2 = pupils.add(pupil_2 as pupilVal);
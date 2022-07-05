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
export class Pupils{
    private counter: number = 0;
    private pupils = new Map();
    private validatePupil(data:pupilVal){
        if(!data.hasOwnProperty("dateOfBirth")){
            throw new TypeError("");
        }else{
            let date_regex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
            date_regex.test(data.dateOfBirth);
            if(!date_regex){
                throw new Error('');
            }
        }
        if(!data.hasOwnProperty("phones")){
            throw new Error('');
        }else{
            data.phones.forEach(phones => {
                let count = 0;
                if(phones.primary === true){
                    count++;
                }
                if(count > 1){
                    throw new Error("");
                }
            });
        }
    }
    public add(pupil: pupilVal): object{
        this.validatePupil(pupil);
        const id = String(this.counter++);
        this.pupils.set(id, pupil);
        return {id, pupil};
    }

    public read(id:string){
        const foundPupil = this.pupils.get(id);
        return foundPupil ? {id, ...foundPupil} : null;
    }
    public update(id: string, updatePupil: pupilVal): void{
        this.validatePupil(updatePupil);
        const foundPupil = this.read(id);
        delete foundPupil.id;
        this.pupils.set(id, {
            ...foundPupil,
            ...updatePupil
        });
    }
    public remove(id:string): void{
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
const pupil1 = pupils.add(pupil_1);
console.log(pupils.read('0'));
pupils.remove('0');

const pupil2 = pupils.add(pupil_2);
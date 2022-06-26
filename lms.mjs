class Subject {
    #validateSub(subject){
        if(subject.length < 2 || subject.length > 3){
            throw new Error('1');
        }
        if(!subject.hasOwnProperty("title") || typeof subject.title !== 'string'){
            throw new Error("2");
        }
        if(!subject.hasOwnProperty("lessons") || typeof subject.lessons !== 'number'){
            throw new Error("3");
        }
        if(subject.hasOwnProperty("description") && typeof subject.description !== 'string'){
            throw new Error("4");
        }
    }
    constructor(subject){
        this.#validateSub(subject);
        const id = String(Math.floor(Math.random() * 100000));
        return {id, ...subject};
    }
}
const history = new Subject({
    title: 'History',
    lessons: 24
});
class LMS {
    #lms = new Map();
    add(data){
        this.#lms.set(data);
    }
    remove(data){
        if(!this.#lms.has(data)){
            throw new Error('')
        }
        this.#lms.delete(data);
    }
    verify(data){
        if(!this.#lms.has(data)){
            return false;
        }
        return true;
    }
    readAll(){
        if(arguments.length) throw new Error('argument was passed');
        console.log(this.#lms);
        // return [...this.#lms.values()];
    }
}
const lms = new LMS();
lms.add(history);
console.log(lms.verify(history));
lms.readAll();



// class DB{
//     #counter = 0;
//     #users = new Map();
//     #validateUser(user, allRequired){
//         if(allRequired && Object.getOwnPropertyNames(user).length !== 4){
//             throw new Error('not all properties were passed')
//         }
//         if(user.name && typeof user.name !== 'string'){
//             throw new Error('name is not a string')
//         }
//         if(user.age !== undefined && typeof user.age !== 'number'){
//             throw new Error('age is not a number')
//         }
//         if(user.country && typeof user.country !== 'string'){
//             throw new Error('country is not a string')
//         }
//         if(user.salary !== undefined && typeof user.salary !== 'number'){
//             throw new Error('salary is not a number')
//         }
//     }
// ​
//     create(user){
//         this.#validateUser(user,true);
//         const id = String(this.#counter++);
//         this.#users.set(id, user);
//         return id;
//     }
// ​
//     read(id){
//         if(typeof id !== 'string') throw new Error('not a string')
//         const foundUser = this.#users.get(id);
//         return foundUser ? {...foundUser, id} : null;
//     }
// ​
//     readAll(){
//         if(arguments.length) throw new Error('argument was passed')
//         return [...this.#users.values()];
//     }
// ​
//     update(id, updatedUser){
//         this.#validateUser(updatedUser,false);
//         const foundUser = this.read(id);
//         delete foundUser.id;
//         this.#users.set(id, {
//             ...foundUser,
//             ...updatedUser
//         });
//     }
// ​
//     delete(id){
//         if(!this.#users.has(id)){
//             throw new Error('ar arsebobs')
//         }
//         this.#users.delete(id);
//     }
// ​
//     find(query){
//         if(query.country && typeof query.country !== 'string'){
//             throw new Error('country is not a string')
//         }
//         if(query.age){
//             if(query.age.min && typeof query.age.min !== 'number'){
//                 // throw
//             }
//             if(query.age.max && typeof query.age.max !== 'number'){
//                 // throw
//             }
//         }
//         if(query.salary){
//             if(query.salary.min && typeof query.salary.min !== 'number'){
//                 // throw
//             }
//             if(query.salary.max && typeof query.salary.max !== 'number'){
//                 // throw
//             }
//         }
//         return this.readAll().filter((user) => {
//             if(query.country && user.country !== query.country){
//                 return false;
//             }
//             if(query.age?.min > user.age || query.age?.max < user.age){
//                 return false;
//             }
//             if(query.salary?.min > user.salary || query.salary?.max < user.salary){
//                 return false;
//             }
//             return true;
//         })
//     }
// }
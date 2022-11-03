import * as bcrypt from 'bcrypt';

const SALT = 10;
export function ecodePassword(password:string){
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, SALT);
}


export function comparePassword(password:string, hashPass:string){
    return bcrypt.compareSync(password, hashPass)
}
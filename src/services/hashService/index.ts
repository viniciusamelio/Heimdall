import HashService from './hashService';
export default class BCryptService implements HashService{

    private _bcrypt = require('bcrypt');
    
    async hash(stringToBeHashed: string) : Promise<string> {
        let result = await this._bcrypt.hash(stringToBeHashed,10,async(err:any,hash:string)=>err ?? hash);
        return result;
    }
    
    async compare(stringToBeCompared: string, hash: String) : Promise<boolean>{
        let result: boolean = false;
        await this._bcrypt.compare(stringToBeCompared, hash).then((isValid: boolean)=> result=isValid);
        return result;      
    }

}
export default interface HashService{
    hash(stringToBeHashed:string): Promise<string>;
    compare(stringToBeCompared:string,hash:String) : Promise<boolean>;
}
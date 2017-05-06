//-----------------------------------------------------------------------------
// Array Extensions
declare interface Array<T>
{
    clone():ArrayConstructor;
    contains(element:any):boolean;
    equals(array:ArrayConstructor):boolean;
}
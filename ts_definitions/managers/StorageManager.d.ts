//-----------------------------------------------------------------------------
// StorageManager
//
// The public static class that manages storage for saving game data.
declare class StorageManager
{
	public static save(savefileId:number, json:string):void;
	public static load(savefileId:number):string;

	public static exists(savefileId:number):boolean;
	public static remove(savefileId:number):void;

	public static isLocalMode():boolean;
	public static loadlFileDirectoryPath():string;
	public static localFilePath(savefileId:number):string;
	public static webStorageKey(savefileId:number):string;

	public static saveToLocalFile(savefileId:number, json:string):void;
	public static loadFromLocalFile(savefileId:number):string;
	public static localFileExists(savefileId:number):boolean;
	public static removeLocalFile(savefileId:number):void;

	public static saveToWebStorage(savefileId:number, json:string):void;
	public static loadFromWebStorage(savefileId:number):string;
	public static webStorageExists(savefileId:number):boolean;
	public static removeWebStorage(savefileId:number):void;
}
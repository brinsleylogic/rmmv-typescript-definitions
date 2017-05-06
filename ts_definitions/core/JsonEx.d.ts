//-----------------------------------------------------------------------------
// JsonEx
//
// The static class that handles JSON with object information.
declare class JsonEx
{
	public static maxDepth:number;
	
	public static stringify(object:Object):string;
	public static parse(json:string):Object;
	public static makeDeepCopy(object:Object):string;
	
	private static _encode(value:Object, depth?:number):Object;
	private static _decode(value:Object):Object;
	private static _getConstructorName(value:Object):string;
	private static _resetPrototype(value:Object, prototype:Object):Object;
}
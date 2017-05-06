//-----------------------------------------------------------------------------
// Decrypter
declare class Decrypter
{
	public static readonly SIGNATURE:string;
	public static readonly VER:string;
	public static readonly REMAIN:string;

	public static hasEncryptedImages:boolean;
	public static hasEncryptedAudio:boolean;

	private static _headerlength:number;
	private static _xhrOk:number;
	private static _encryptionKey:string;
	private static _ignoreList:string[];
	
	public static checkImgIgnore(url:string):boolean;

	public static decryptImg(url:string, bitmap:Bitmap):void;
	public static decryptHTML5Audio(url:string, bgm:BGM, pos:number):void;
	public static decryptArrayBuffer(arrayBuffer:ArrayBuffer):ArrayBuffer

	public static cutArrayHeader(arrayBuffer:ArrayBuffer, length:number):ArrayBuffer;

	public static createBlobUrl(arrayBuffer:ArrayBuffer):string;

	public static extToEncryptExt(url:string):string;

	public static readEncryptionkey():void;
}
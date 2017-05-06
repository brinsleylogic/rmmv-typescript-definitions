//-----------------------------------------------------------------------------
// Utils
//
// The public static class that defines utility methods.
declare class Utils
{
	public static readonly RPGMAKER_NAME:string;
	public static readonly RPGMAKER_VERSION:string;
	
	public static isOptionValid(name:string):boolean;
	public static isMobileDevice():boolean;
	public static isMobileSafari():boolean;
	public static isAndroidChrome():boolean;
	public static isNwjs():boolean;

	public static canReadGameFiles():boolean;
	public static rgbToCssColor(r:number, g:number, b:number):string;
}
//-----------------------------------------------------------------------------
// ImageManager
//
// The public static class that loads images, creates bitmap objects and retains them.
declare class ImageManager
{
	private static _cache:CacheMap;
	
	public static loadAnimation(filename:string, hue:number):Bitmap;
	public static loadBattleback1(filename:string, hue:number):Bitmap;
	public static loadBattleback2(filename:string, hue:number):Bitmap;
	public static loadEnemy(filename:string, hue:number):Bitmap;
	public static loadCharacter(filename:string, hue:number):Bitmap;
	public static loadFace(filename:string, hue:number):Bitmap;
	public static loadParallax(filename:string, hue:number):Bitmap;
	public static loadPicture(filename:string, hue:number):Bitmap;
	public static loadSvActor(filename:string, hue:number):Bitmap;
	public static loadSvEnemy(filename:string, hue:number):Bitmap;
	public static loadSystem(filename:string, hue:number):Bitmap;
	public static loadTileset(filename:string, hue:number):Bitmap;
	public static loadTitle1(filename:string, hue:number):Bitmap;
	public static loadTitle2(filename:string, hue:number):Bitmap;

	public static loadBitmap(folder:string, filename:string, hue:number, smooth:boolean):Bitmap;
	public static loadEmptyBitmap():Bitmap;
	public static loadNormalBitmap(path:string, hue:number):Bitmap;

	public static clear():void;

	public static isReady():boolean;
	public static isCharacterObject(filename:string):boolean;
	public static isBigCharacter(filename:string):boolean;
	public static isZeroParallax(filename:string):boolean;
}
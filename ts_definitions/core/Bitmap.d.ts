//-----------------------------------------------------------------------------
// Bitmap
//
//The basic object that represents an image.
declare class Bitmap
{
	public static load(url:string):Bitmap;
	public static snap(stage:Stage):Bitmap;

	public baseTexture:PIXI.BaseTexture;
	public canvas:HTMLCanvasElement;
	public context:CanvasRenderingContext2D;
	public fontFace:string;
	public fontSize:number;
	public fontItalic:boolean;
	public height:number;
	public outlineColor:string;
	public outlineWidth:number;
	public paintOpacity:number;
	public rect:Rectangle;
	public smooth:boolean;
	public textColor:string;
	public url:string;
	public width:number;
	
	protected _canvas:HTMLCanvasElement;
	protected _context:CanvasRenderingContext2D;
	protected _baseTexture:PIXI.BaseTexture;
	protected _image:HTMLImageElement;
	protected _url:string;
	protected _paintOpacity:number;
	protected _smooth:boolean;
	protected _loadListeners:Function[];
	protected _isLoading:boolean;
	protected _hasError:boolean;
	
	public constructor(width?:number, height?:number);

	public isReady():boolean;
	public isError():boolean;
	public resize(width:number, height:number):void;
	public blt(source:Bitmap, sx:number, sy:number, sw:number, sh:number, dx:number, dy:number, dw?:number, dh?:number):void;
	public getPixel(x:number, y:number):string;
	public getAlphaPixel(x:number, y:number):number;
	public clearRect(x:number, y:number, width:number, height:number):void;
	public clear():void;
	public fillRect(x:number, y:number, width:number, height:number, color:string):void;
	public fillAll(color:string):void;
	public gradientFillRect(x:number, y:number, width:number, height:number, color1:string, color2:string, vertical:boolean):void;
	public drawCircle(x:number, y:number,radius:number, color:string):void;
	public drawText(text:string, x:number, y:number, maxWidth:number, lineHeight:number, align:string):void;
	public measureTextWidth(text:string):number;
	public adjustTone(r:number, g:number, b:number):void;
	public rotateHue(offset:number):void;
	public blur():void;
	public addLoadListener(callback:Function):void;

	protected _makeFontNameText():string;
	protected _drawTextOutline(text:string, tx:number, ty:number, maxWidth:number):void;
	protected _drawtextBody(text:string, tx:number, ty:number, maxWidth:number):void;
	protected _onLoad():void;
	protected _callLoadListeners():void;
	protected _onError():void;
	protected _setDirty():void;
}
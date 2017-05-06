//-----------------------------------------------------------------------------
// Sprite
//
// The basic object that is rendered to the game screen.
declare class Sprite extends PIXI.Sprite
{
	protected static _counter:number;
	
	public bitmap:Bitmap;
	public opaque:boolean;
	public spriteId:number;
	public width:number;
	public height:number;
	public opacity:number;
	
	protected _bitmap:Bitmap;
	protected _frame:Rectangle;
	protected _realFrame:Rectangle;
	protected _offset:Point;
	protected _blendColor:number[];
	protected _colorTone:number[];
	protected _canvas:PIXI.SystemRenderer;
	protected _context:CanvasRenderingContext2D;
	protected _tintTexture:PIXI.BaseTexture;

	public update():void;
	public move(x:number, y:number):void;
	public setFrame(x:number, y:number, width:number, height:number):void;
	public getBlendColor():number[];
	public setBlendColor(color:number[]):void;
	public getColorTone():number[];
	public setColorTone(color:number[]):void;
	public updateTransform():void;
	
	protected _onBitmapLoad():void;
	protected _refresh():void;
	protected _isInBitmapRect(x:number, y:number, w:number, h:number):boolean;
	protected _needsTint():boolean;
	protected _createTinter(w:number, h:number):void;
	protected _executeTint(x:number, y:number, w:number, h:number):void;
	protected _renderWebGL():void;
}
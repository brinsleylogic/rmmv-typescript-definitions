//-----------------------------------------------------------------------------
// TilingSprite
//
//  The sprite object for a tiling image.
declare class TilingSprite extends PIXI.Container
{
	public origin:Point;
	public bitmap:Bitmap;
	public opacity:number;
		
	protected _bitmap:Bitmap;
	protected _width:number;
	protected _height:number;
	protected _frame:Rectangle;
	
	public constructor(bitmap:Bitmap);

	public move(x:number, y:number, width:number, height:number):void;
	public setFrame(x:number, y:number, width:number, height:number):void;
	public updateTransform():void;
	
	protected _onBitmapLoad():void;
	protected _refresh():void;
}
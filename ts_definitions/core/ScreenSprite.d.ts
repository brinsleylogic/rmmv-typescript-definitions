//-----------------------------------------------------------------------------
// ScreenSprite
//
// The sprite which covers the entire game screen.
declare class ScreenSprite extends PIXI.Sprite
{
	public opacity:number;
	
	protected _bitmap:Bitmap;
	protected _red:number;
	protected _green:number;
	protected _blue:number;

	public setBlack():void;
	public setWhite():void;
	public setColor(r:number, g:number, b:number):void;
	
	protected _renderCanvas(renderSession:PIXI.SystemRenderer):void;
}
//-----------------------------------------------------------------------------
// ToneSprite
//
// The sprite which changes the screen color in 2D canvas mode.
declare class ToneSprite extends PIXI.DisplayObject
{
	public clear():void;
	public setTone(r:number, g:number, b:number, gray:number):void;
	
	protected _renderCanvas(renderSession:HTMLCanvasElement):void;
	protected _renderWebGL(renderSession:HTMLCanvasElement):void;
}
//-----------------------------------------------------------------------------
// ToneFilter
//
// The color matrix filter for WebGL.
declare class ToneFilter extends PIXI.filters.ColorMatrixFilter
{
	public reset():void;
	public adjustHue(value:number):void;
	public adjustSaturation(value:number):void;
	public adjustTone(r:number, g:number, b:number):void;
	
	protected _multiplyMatrix(matrix:number[]):void;
}
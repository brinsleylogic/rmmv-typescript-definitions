//-----------------------------------------------------------------------------
// Rectangle
//
// The rectangle class.
declare class Rectangle extends PIXI.Rectangle
{
	public static emptyRectangle():Rectangle;

	public constructor(x:number, y:number, width:number, height:number);
}
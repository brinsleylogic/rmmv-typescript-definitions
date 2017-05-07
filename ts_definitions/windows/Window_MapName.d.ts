//-----------------------------------------------------------------------------
// Window_MapName
//
// The window for displaying the map name on the map screen.

declare class Window_MapName extends Window_Base
{
	protected _showCount:number;

	public constructor();

	public windowWidth():number;
	public windowHeight():number;

	public updateFadeIn():void;
	public updateFadeOut():void;

	public drawBackground(x:number, y:number, width:number, height:number):void;
}
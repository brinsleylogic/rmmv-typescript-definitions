//-----------------------------------------------------------------------------
// Sprite_Timer
//
// The sprite for displaying the timer.

declare class Sprite_Timer extends Sprite
{
	protected _seconds:number;

	public createBitmap():void;

	public update():void;
	public updateBitmap():void;

	public redraw():void;

	public timerText():string;

	public updatePosition():void;
	public updateVisibility():void;
}
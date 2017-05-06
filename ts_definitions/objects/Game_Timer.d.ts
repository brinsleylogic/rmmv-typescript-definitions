//-----------------------------------------------------------------------------
// Game_Timer
//
// The game object class for the timer.

declare class Game_Timer
{
	protected _frames:number;
	protected _working:boolean;

	public constructor();

	public update(sceneActive:boolean):void;

	public start(count:number):void;
	public stop():void;

	public isWorking():boolean;

	public seconds():number;

	public onExpire():void;
}
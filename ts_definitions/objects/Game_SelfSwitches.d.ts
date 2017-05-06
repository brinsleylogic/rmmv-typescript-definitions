//-----------------------------------------------------------------------------
// Game_SelfSwitches
//
// The game object class for self switches.

declare class Game_SelfSwitches
{
	protected _data:{ [s:string]:boolean };

	public constructor();

	public clear():void;
	public onChange():void;

	public value(switchId:string):boolean;
	public setValue(switchId:string, value:boolean):void;
}
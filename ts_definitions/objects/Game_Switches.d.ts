//-----------------------------------------------------------------------------
// Game_Switches
//
// The game object class for switches.

declare class Game_Switches
{
	protected _data:{ [n:number]:boolean };

	public constructor();

	public clear():void;
	public onChange():void;

	public value(switchId:number):boolean;
	public setValue(switchId:number, value:boolean):void;
}
//-----------------------------------------------------------------------------
// Game_Variables
//
// The game object class for variables.

declare class Game_Variables
{
	protected _data:{ [n:number]:number };

	public constructor();

	public clear():void;
	public onChange():void;

	public value(variableId:number):number;
	public setValue(variableId:number, value:number):void;
}
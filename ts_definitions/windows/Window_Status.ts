//-----------------------------------------------------------------------------
// Window_Status
//
// The window for displaying full status on the status screen.

declare class Window_Status extends Window_Selectable
{
	protected _actor:Game_Actor;

	public constructor();

	public setActor(actor:Game_Actor):void;

	public drawBlock1(y:number):void;
	public drawBlock2(y:number):void;
	public drawBlock3(y:number):void;
	public drawBlock4(y:number):void;
	public drawHorzLine(y:number):void;

	public lineColor():string;

	public drawBasicInfo(x:number, y:number):void;
	public drawParameters(x:number, y:number):void;
	public drawExpInfo(x:number, y:number):void;
	public drawEquipments(x:number, y:number):void;
	public drawProfile(x:number, y:number):void;

	public maxEquipmentLines():number;
}
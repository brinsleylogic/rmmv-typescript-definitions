//-----------------------------------------------------------------------------
// Window_EquipStatus
//
// The window for displaying parameter changes on the equipment screen.

declare class Window_EquipStatus extends Window_Base
{
	protected _actor:Game_Actor;

	public constructor(x:number, y:number);

	public windowWidth():number;
	public windowHeight():number;
	public numVisibleRows():number;

	public setActor(actor:Game_Actor):void;
	public setTempActor(tempActor:Game_Actor):void;

	public drawItem(x:number, y:number, paramId:number):void;
	public drawParamName(x:number, y:number, paramId:number):void;
	public drawCurrentParam(x:number, y:number, paramId:number):void;
	public drawRightArrow(x:number, y:number):void;
	public drawNewParam(x:number, y:number, paramId:number):void;
}
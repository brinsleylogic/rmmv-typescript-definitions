//-----------------------------------------------------------------------------
// Window_EquipItem
//
// The window for selecting an equipment item on the equipment screen.

declare class Window_EquipItem extends Window_ItemList
{
	protected _actor:Game_Actor;
	protected _slotId:number;
	protected _statusWindow:Window_EquipStatus;

	public setActor(actor:Game_Actor):void;
	public setSlotId(slotId:number):void;

	public setStatusWindow(statusWindow:Window_EquipStatus):void;
}
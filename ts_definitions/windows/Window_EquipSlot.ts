//-----------------------------------------------------------------------------
// Window_EquipSlot
//
// The window for selecting an equipment slot on the equipment screen.

declare class Window_EquipSlot extends Window_Selectable
{
	protected _actor:Game_Actor;

	public setActor(actor:Game_Actor):void;

	public item():RPG_EquipBase;

	public slotName(index:number):string;

	public setStatusWindow(statusWindow:Window_EquipStatus):void;
	public setItemWindow(itemWindow:Window_EquipItem):void;
}
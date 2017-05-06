//-----------------------------------------------------------------------------
// Window_MenuActor
//
// The window for selecting a target actor on the item and skill screens.

declare class Window_MenuActor extends Window_MenuStatus
{
	public constructor();

	public selectForItem(item:RPG_ItemBase):void;
}
//-----------------------------------------------------------------------------
// Scene_Item
//
// The scene class of the item screen.
declare class Scene_Item extends Scene_ItemBase
{
	protected _categoryWindow:Window_ItemCategory;
	protected _itemWindow:Window_ItemList;
	
	public createCategoryWindow():void;
	public createItemWindow():void;
	public onCategoryOk():void;
	public onItemOk():void;
	public onItemCancel():void;
	public playSeForItem():void;
}
//-----------------------------------------------------------------------------
// Window_ItemList
//
// The window for selecting an item on the item screen.

declare class Window_ItemList extends Window_Selectable
{
	protected _category:string;
	protected _data:RPG_ItemBase[];

	public setCategory(category:string):void;

	public item():RPG_ItemBase;

	public includes(item:RPG_ItemBase):boolean;

	public needsNumber():boolean;

	public isEnabled(item:RPG_ItemBase):boolean;

	public makeItemList():void;

	public selectLast():void;

	public numberWidth():number;

	public drawItemNumber(item:RPG_ItemBase, x:number, y:number, width:number):void;
}
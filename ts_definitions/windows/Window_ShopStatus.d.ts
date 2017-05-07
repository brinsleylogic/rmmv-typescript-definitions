//-----------------------------------------------------------------------------
// Window_ShopStatus
//
// The window for displaying number of items in possession and the actor's
// equipment on the shop screen.

declare class Window_ShopStatus extends Window_Base
{
	protected _item:RPG_ItemBase;
	protected _pageIndex:number;

	public constructor(x:number, y:number, width:number, height:number);

	public setItem(item:RPG_ItemBase):void;

	public isEquipItem():boolean;

	public drawPossession(x:number, y:number):void;
	public drawEquipInfo(x:number, y:number):void;

	public statusMembers():Game_Actor[];

	public pageSize():number;
	public maxPages():number;

	public drawActorEquipInfo(x:number, y:number, actor:Game_Actor):void;
	public drawActorParamChange(x:number, y:number, actor:Game_Actor, item1:RPG_EquipBase):void;

	public paramId():number;

	public currentEquippedItem(actor:Game_Actor, etypeId:number):RPG_EquipBase;

	public updatePage():void;
	public isPageChangeEnabled():boolean;
	public isPageChangeRequested():boolean;
	public isTouchedInsideFrame():boolean;
	public changePage():void;
}
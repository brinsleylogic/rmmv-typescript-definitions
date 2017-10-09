//-----------------------------------------------------------------------------
// Window_ShopBuy
//
// The window for selecting an item to buy on the shop screen.

declare class Window_ShopBuy extends Window_Selectable
{
	protected _shopGoods:number[][];
	protected _data:RPG_ItemBase[];
	protected _price:number[];
	protected _money:number;
	protected _statusWindow:Window_ShopStatus;

	public constructor(x:number, y:number, height:number, shopGoods:[number, number]);

	public windowWidth():number;

	public item():RPG_ItemBase;

	public setMoney(money:number):void;

	public price(item:RPG_ItemBase):number;

	public isEnabled(item:RPG_ItemBase):boolean;

	public makeItemList():void;

	public setStatusWindow(statusWindow:Window_ShopStatus):void;
}
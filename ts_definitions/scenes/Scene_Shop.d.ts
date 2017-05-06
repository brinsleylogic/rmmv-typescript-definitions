//-----------------------------------------------------------------------------
// Scene_Shop
//
// The scene class of the shop screen.
declare class Scene_Shop extends Scene_MenuBase
{
	protected _goods:[number, number][];
	protected _purchaseOnly:boolean;
	protected _item:RPG_ItemBase;
	protected _goldWindow:Window_Gold;
	protected _dummyWindow:Window_Base;
	protected _commandWindow:Window_ShopCommand;
	protected _numberWindow:Window_ShopNumber;
	protected _statusWindow:Window_ShopStatus;
	protected _buyWindow:Window_ShopBuy;
	protected _sellWindow:Window_ShopSell;
	protected _categoryWindow:Window_ItemCategory;
	
	public prepare(goods:[number, number][], purchaseOnly:boolean):void;
	public createGoldWindow():void;
	public createCommandWindow():void;
	public createDummyWindow():void;
	public createNumberWindow():void;
	public createStatusWindow():void;
	public createBuyWindow():void;
	public createSellWindow():void;
	public createCategoryWindow():void;
	public activateBuyWindow():void;
	public activateSellWindow():void;
	public commandBuy():void;
	public commandSell():void;
	public onBuyOk():void;
	public onBuyCancel():void;
	public onCategoryOk():void;
	public onCategoryCancel():void;
	public onSellOk():void;
	public onSellCancel():void;
	public onNumberOk():void;
	public onNumberCancel():void;
	public doBuy():void;
	public doSell():void;
	public endNumberInput():void;
	public maxBuy():number;
	public maxSell():number;
	public money():number;
	public currencyUnit():string;
	public buyingPrice():number;
	public sellingPrice():number;
}
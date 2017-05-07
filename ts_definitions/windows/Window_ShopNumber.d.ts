//-----------------------------------------------------------------------------
// Window_ShopNumber
//
// The window for inputting quantity of items to buy or sell on the shop
// screen.

declare class Window_ShopNumber extends Window_Selectable
{
	protected _item:RPG_ItemBase;
	protected _max:number;
	protected _price:number;
	protected _number:number;
	protected _currencyUnit:string;
	protected _buttons:Sprite_Button[];

	public constructor(x:number, y:number, height:number);

	public windowWidth():number;

	public number():number;

	public setup(item:RPG_ItemBase, max:number, price:number):void;
	public setCurrencyUnit(currencyUnit:string):void;

	public createButtons():void;
	public placeButtons():void;
	public updateButtonsVisiblity():void;
	public showButtons():void;
	public hideButtons():void;

	public drawMultiplicationSign():void;
	public drawNumber():void;
	public drawTotalPrice():void;

	public itemY():number;

	public priceY():number;

	public buttonY():number;

	public cursorWidth():number;

	public cursorX():number;

	public maxDigits():number;

	public processNumberChange():void;
	public changeNumber(amount:number):void;

	public onButtonUp():void;
	public onButtonUp2():void;
	public onButtonDown():void;
	public onButtonDown2():void;
	public onButtonOk():void;
}
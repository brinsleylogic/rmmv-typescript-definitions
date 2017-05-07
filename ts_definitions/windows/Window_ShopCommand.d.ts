//-----------------------------------------------------------------------------
// Window_ShopCommand
//
// The window for selecting buy/sell on the shop screen.

declare class Window_ShopCommand extends Window_HorzCommand
{
	protected _windowWidth:number;
	protected _purchaseOnly:boolean;

	public constructor(width:number, purchaseOnly:boolean);
}
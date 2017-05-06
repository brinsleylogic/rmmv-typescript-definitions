//-----------------------------------------------------------------------------
// Window_Gold
//
// The window for displaying the party's gold.

declare class Window_Gold extends Window_Base
{
	public constructor(x:number, y:number)

	public windowWidth():number;
	public windowHeight():number;

	public value():number;

	public currencyUnit():string;
}
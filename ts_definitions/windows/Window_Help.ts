//-----------------------------------------------------------------------------
// Window_Help
//
// The window for displaying the description of the selected item.

declare class Window_Help extends Window_Base
{
	protected _text:string;

	public setText(text:string):void;

	public clear():void;

	public setItem(item:RPG_ItemBase):void;
}
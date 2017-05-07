//-----------------------------------------------------------------------------
// Window_EventItem
//
// The window used for the event command [Select Item].

declare class Window_EventItem extends Window_ItemList
{
	protected _messageWindow:Window_Message;

	public constructor(messageWindow:Window_Message);

	public windowHeight():number;

	public start():void;

	public updatePlacement():void;

	public onOk():void;
	public onCancel():void;
}
//-----------------------------------------------------------------------------
// Window_ChoiceList
//
// The window used for the event command [Show Choices].

declare class Window_ChoiceList extends Window_Command
{
	protected _messageWindow:Window_Message;
	protected _background:number;

	public constructor(messageWindow:Window_Message);

	public start():void;

	public selectDefault():void;

	public updatePlacement():void;
	public updateBackground():void;

	public maxChoiceWidth():number;

	public textWidthEx(text:string):number;
}
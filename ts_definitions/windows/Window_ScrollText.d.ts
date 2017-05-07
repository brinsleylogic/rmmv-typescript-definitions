//-----------------------------------------------------------------------------
// Window_ScrollText
//
// The window for displaying scrolling text. No frame is displayed, but it
// is handled as a window for convenience.

declare class Window_ScrollText extends Window_Base
{
	protected _text:string;
	protected _allTextHeight:number;

	public constructor();

	public startMessage():void;
	public updateMessage():void;

	public scrollSpeed():number;

	public isFastForward():boolean;
	public fastForwardRate():number;

	public terminateMessage():void;
}
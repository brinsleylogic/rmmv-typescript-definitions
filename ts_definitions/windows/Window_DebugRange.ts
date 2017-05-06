//-----------------------------------------------------------------------------
// Window_DebugRange
//
// The window for selecting a block of switches/variables on the debug screen.

declare class Window_DebugRange extends Window_Selectable
{
	public static readonly lastTopRow:number;
	public static readonly lastIndex:number;

	protected _maxSwitches:number;
	protected _maxVariables:number;

	public constructor(x:number, y:number);

	public windowWidth():number;
	public windowHeight():number;

	public mode():string;
	public topId():number;

	public setEditWindow(editWindow:Window_DebugEdit):void;
}
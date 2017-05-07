//-----------------------------------------------------------------------------
// Window_MenuStatus
//
// The window for displaying party member status on the menu screen.

declare class Window_MenuStatus extends Window_Selectable
{
	protected _formationMode:boolean;
	protected _pendingIndex:number;

	public constructor(x:number, y:number);

	public windowWidth():number;
	public windowHeight():number;

	public numVisibleRows():number;

	public loadImages():void;

	public drawItemBackground(index:number):void;
	public drawItemImage(index:number):void;
	public drawItemStatus(index:number):void;

	public selectLast():void;

	public formationMode():boolean;
	public setFormationMode(formationMode:boolean):void;

	public pendingIndex():number;
	public setPendingIndex(index:number):void;
}
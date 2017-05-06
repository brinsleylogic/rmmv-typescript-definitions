//-----------------------------------------------------------------------------
// Window_SavefileList
//
// The window for selecting a save file on the save and load screens.

declare class Window_SavefileList extends Window_Selectable
{
	protected _mode:string;

	public setMode(mode:string):void;

	public maxItems():number;

	public maxVisibleItems():void;

	public drawFileId(id:number, x:number, y:number):void;
	public drawContents(info:Savefile, rect:Rect, valid:boolean):void;
	public drawGameTitle(info:Savefile, x:number, y:number, width:number):void;
	public drawPartyCharacters(info:Savefile, x:number, y:number):void;
	public drawPlaytime(info:Savefile, x:number, y:number, width:number):void;
}
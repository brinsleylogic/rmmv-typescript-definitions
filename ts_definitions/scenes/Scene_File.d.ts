//-----------------------------------------------------------------------------
// Scene_File
//
// The superclass of Scene_Save and Scene_Load.
declare class Scene_File extends Scene_MenuBase
{
	protected _helpWindow:Window_Help;
	protected _listWindow:Window_SavefileList;
	
	public savefileId():number;
	public createHelpWindow():void;
	public createListWindow():void;
	public mode():string;
	public activateListWindow():void;
	public helpWindowText():string;
	public firstSavefileIndex():number;
	public onSavefileOk():void;
}
//-----------------------------------------------------------------------------
// Scene_Menu
//
// The scene class of the menu screen.
declare class Scene_Menu extends Scene_MenuBase
{
	protected _commandWindow:Window_MenuCommand;
	protected _goldWindow:Window_Gold;
	protected _statusWindow:Window_MenuStatus;
	
	public createCommandWindow():void;
	public createGoldWindow():void;
	public createStatusWindow():void;
	public commandItem():void;
	public commandPersonal():void;
	public commandFormation():void;
	public commandOptions():void;
	public commandSave():void;
	public commandEndGame():void;
	public onPersonalOk():void;
	public onPersonalCancel():void;
	public onFormationOk():void;
	public onFormationCancel():void;
}
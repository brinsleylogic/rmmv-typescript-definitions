//-----------------------------------------------------------------------------
// Scene_Name
//
// The scene class of the name input screen.
declare class Scene_Name extends Scene_MenuBase
{
	protected _actorId:number;
	protected _actor:Game_Actor;
	protected _maxLength:number;
	protected _editWindow:Window_NameEdit;
	protected _inputWindow:Window_NameInput;
	
	public prepare():void;
	public createEditWindow():void;
	public createInputWindow():void;
	public onInputOk():void;
}
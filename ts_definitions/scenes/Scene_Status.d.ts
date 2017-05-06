//-----------------------------------------------------------------------------
// Scene_Status
//
// The scene class of the status screen.
declare class Scene_Status extends Scene_MenuBase
{
	private _statusWindow:Window_Status;
	
	public refreshActor():void;
	public onActorChange():void;
}
//-----------------------------------------------------------------------------
// Scene_GameEnd
//
// The scene class of the game end screen.
declare class Scene_GameEnd extends Scene_MenuBase
{
	protected _commandWindow:Window_GameEnd;
	
	public createBackground():void;
	public createCommandWindow():void;
	public commandToTitle():void;
}
//-----------------------------------------------------------------------------
// Scene_Title
//
// The scene class of the title screen.
declare class Scene_Title extends Scene_Base
{
	protected _commandWindow:Window_TitleCommand;

	public createBackground():void;
	public createForeground():void;
	public drawGameTitle():void;
	public centerSprite():void;
	public createCommandWindow():void;
	public commandNewGame():void;
	public commandContinue():void;
	public commandOptions():void;
	public playTitleMusic():void;
}
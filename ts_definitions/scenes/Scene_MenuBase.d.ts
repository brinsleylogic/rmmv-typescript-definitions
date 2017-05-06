//-----------------------------------------------------------------------------
// Scene_MenuBase
//
// The superclass of all the menu-type scenes.
declare class Scene_MenuBase extends Scene_Base
{
	protected _actor:Game_Actor;
	
	public actor():Game_Actor;
	public updateActor():void;
	public createBackground():void;
	public setBackgroundOpacity():void;
	public createHelpWindow():void;
	public nextActor():void;
	public previousActor():void;
	public onActorChange():void;
}
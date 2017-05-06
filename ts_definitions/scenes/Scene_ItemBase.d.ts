//-----------------------------------------------------------------------------
// Scene_ItemBase
//
// The superclass of Scene_Item and Scene_Skill.
declare class Scene_ItemBase extends Scene_MenuBase
{
	protected _actorWindow:Window_MenuActor;
	
	public user():Game_Actor;
	public isCursorLeft():boolean;
	public showSubWindow(window:Window):void;
	public hideSubWindow(window:Window):void;
	public onActorOk():void;
	public onActorCancel():void;
	public determineItem():void;
	public useItem():void;
	public activateItemWindow():void;
	public itemTargetActors():number[];
	public canUse():boolean;
	public isItemEffectsValid():boolean;
	public applyItem():void;
	public checkCommonEvent():void;
}
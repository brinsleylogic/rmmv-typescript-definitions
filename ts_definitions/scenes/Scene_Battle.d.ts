//-----------------------------------------------------------------------------
// Scene_Battle
//
// The scene class of the battle screen.
declare class Scene_Battle extends Scene_Base
{
	protected _statusWindow:Window_BattleStatus;
	protected _partyCommandWindow:Window_PartyCommand;
	protected _actorCommandWindow:Window_ActorCommand;
	protected _logWindow:Window_BattleLog;
	protected _helpWindow:Window_Help;
	protected _skillWindow:Window_BattleSkill;
	protected _itemWindow:Window_BattleItem;
	protected _actorWindow:Window_BattleActor;
	protected _enemyWindow:Window_BattleEnemy;
	protected _messageWindow:Window_Message;
	protected _scrollTextWindow:Window_ScrollText;
	
	protected _spriteset:Spriteset_Battle;
	
	public item():RPG_ItemBase;
	public updateBattleProcess():void;
	public isAnyInputWindowActive():boolean;
	public changeInputWindow():void;
	public needsSlowFadeOut():boolean;
	public updateStatusWindow():void;
	public updateWindowPositions():void;
	public createDisplayObjects():void;
	public createSpriteset():void;
	public createAllWindows():void;
	public createLogWindow():void;
	public createStatusWindow():void;
	public createPartyCommandWindow():void;
	public createActorCommandWindow():void;
	public createHelpWindow():void;
	public createSkillWindow():void;
	public createItemWindow():void;
	public createActorWindow():void;
	public createEnemyWindow():void;
	public createMessageWindow():void;
	public createScrolltextWindow():void;
	public refreshStatus():void;
	public startPartyCommandSelection():void;
	public commandFight():void;
	public commandEscape():void;
	public commandGuard():void;
	public startActorCommandSelection():void;
	public commandAttack():void;
	public commandSkill():void;
	public commandGuard():void;
	public commandItem():void;
	public selectNextCommand():void;
	public selectPreviousCommand():void;
	public selectActorSelection():void;
	public onActorOk():void;
	public onActorCancel():void;
	public selectEnemySelection():void;
	public onEnemyOk():void;
	public onEnemyCancel():void;
	public onSkillOk():void;
	public onSkillCancel():void;
	public onItemOk():void;
	public onItemCancel():void;
	public onSelectAction():void;
	public endCommandSelection():void;
}
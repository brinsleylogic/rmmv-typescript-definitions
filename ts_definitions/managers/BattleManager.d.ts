//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages battle progress.
declare class BattleManager
{
	private static _phase:string;
	private static _canEscape:boolean;
	private static _canLose:boolean;
	private static _battleTest:boolean;
	private static _eventCallback:(n:number) => void;
	private static _preemtpive:boolean;
	private static _surprise:boolean;
	private static _actorIndex:number;
	private static _actionForcedBattler:Game_Battler;
	private static _mapBgm:BGM_Cached;
	private static _mapBgs:BGS_Cached;
	private static _actionBattlers:Game_Battler[];
	private static _subject:Game_Battler;
	private static _action:Game_Action;
	private static _targets:Game_Battler[];
	private static _logWindow:Window_BattleLog;
	private static _statusWindow:Window_BattleStatus;
	private static _spriteset:Spriteset_Battle;
	private static _escapeRatio:number;
	private static _escaped:boolean;
	private static _rewards:BattleRewards;
	
	public static isBattletest():boolean;
	public static setBattleTest(battleTest:boolean):void;

	public static setEventCallback(callback:(n:number) => void):void;
	public static setLogWindow(logWindow:Window_BattleLog):void;
	public static setStatusWindow(statusWindow:Window_BattleStatus):void;
	public static setSpriteset(spriteset:Spriteset_Battle):void;

	public static onEncounter():void;

	public static ratePreemptive():number;
	public static rateSurprise():number;
	public static saveBgmAndBgs():void;
	public static makeEscapeRatio():void;

	public static update():void;
	public static updateEvent():boolean;
	public static updateEventMain():boolean;

	public static isBusy():boolean;
	public static isInputting():boolean;
	public static isInTurn():boolean;
	public static isTurnEnd():boolean;
	public static isAborting():boolean;
	public static isBattleEnd():boolean;
	public static canEscape():boolean;
	public static canLose():boolean;
	public static isEscaped():boolean;

	public static actor():Game_Actor;
	public static clearActor():void;
	public static changeActor(newActorIndex:number, lastActorActionState:string):void;

	public static startbattle():void;
	public static displayStartMessages():void;

	public static startInput():void;
	public static inputtingAction():boolean;
	public static selectNextCommand():void;
	public static selectPreviousCommand():void;
	public static refreshStatus():void;

	public static startTurn():void;
	public static updateTurn():void;
	public static processTurn():void;
	public static endTurn():void;
	public static updateTurnEnd():void;

	public static getNextSubject():Game_Battler;
	public static allBattleMembers():Game_Battler[];

	public static makeActionOrders():void;
	public static startAction():void;
	public static updateAction():void;
	public static endAction():void;

	public static invokeAction(subject:Game_Battler, target:Game_Battler):void;
	public static invokeNormalAction(subject:Game_Battler, target:Game_Battler):void;
	public static invokeCounterAttack(subject:Game_Battler, target:Game_Battler):void;
	public static invokeMagicReflection(subject:Game_Battler, target:Game_Battler):void;

	public static applySubstitute(target:Game_Battler):Game_Battler;
	public static checkSubstitute(target:Game_Battler):boolean;

	public static isActionForced():boolean;
	public static forceAction(battler:Game_Battler):void;
	public static processForcedAction():void;

	public static abort():void;
	public static checkBattleEnd():boolean;
	public static checkAbort():boolean;

	public static processVictory():void;
	public static processEscape():void;
	public static processAbort():void;
	public static processDefeat():void;

	public static endBattle(result:number):void;
	public static updateBattleEnd():void;
	public static makeRewards():void;

	public static displayVictoryMessage():void;
	public static displayDefeatMessage():void;
	public static displayEscapeSuccessMessage():void;
	public static displayEscapeFailureMessage():void;
	public static displayRewards():void;
	public static displayExp():void;
	public static displayGold():void;
	public static displayDropItems():void;

	public static gainRewards():void;
	public static gainExp():void;
	public static gainGold():void;
	public static gainDropItems():void;
	
}

interface BattleRewards
{
	gold:number;
	exp:number;
	items:RPG_ItemBase[];
}
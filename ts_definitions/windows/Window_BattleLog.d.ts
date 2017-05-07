//-----------------------------------------------------------------------------
// Window_BattleLog
//
// The window for displaying battle progress. No frame is displayed, but it is
// handled as a window for convenience.

declare class Window_BattleLog extends Window_Selectable
{
	protected _lines:string[];
	protected _methods:Method[];
	protected _waitCount:number;
	protected _waitMode:string;
	protected _baseLineStack:number[];
	protected _spriteset:Spriteset_Battle;

	public constructor();

	public setSpriteset(spriteset:Spriteset_Battle):void;

	public windowWidth():number;
	public windowHeight():number;

	public maxLines():number;

	public createBackBitmap():void;
	public createBackSprite():void;

	public numLines():number;

	public messageSpeed():number;

	public isBusy():boolean;

	public updateWait():boolean;
	public updateWaitCount():boolean;
	public updateWaitMode():boolean;

	public setWaitMode(waitMode:string):void;

	public callNextMethod():void;

	public isFastForward():boolean;

	public push(methodName:string):void;
	public clear():void;

	public wait():void;
	public waitForEffect():void;
	public waitForMovement():void;

	public addText(text:string):void;

	public pushBaseLine():void;
	public popBaseLine():void;

	public waitForNewLine():void;

	public popupDamage(target:Game_Battler):void;

	public performActionStart(subject:Game_Battler, action:Game_Action):void;
	public performAction(subject:Game_Battler, action:Game_Action):void;
	public performActionEnd(subject:Game_Battler):void;
	public performDamage(target:Game_Battler):void;
	public performMiss(target:Game_Battler):void;
	public performRecovery(target:Game_Battler):void;
	public performEvasion(target:Game_Battler):void;
	public performMagicEvasion(target:Game_Battler):void;
	public performCounter(target:Game_Battler):void;
	public performReflection(target:Game_Battler):void;
	public performSubstitute(substitute:Game_Battler, target:Game_Battler):void;
	public performCollapse(target:Game_Battler):void;

	public showAnimation(subject:Game_Battler, targets:Game_Battler[], animationId:number):void;
	public showAttackAnimation(subject:Game_Battler, targets:Game_Battler[]):void;
	public showActorAttackAnimation(subject:Game_Battler, targets:Game_Battler[]):void;
	public showEnemyAttackAnimation(subject:Game_Battler, targets:Game_Battler[]):void;
	public showNormalAnimation(targets:Game_Battler[], animationId:number, mirror:boolean):void;

	public animationBaseDelay():number;
	public animationNextDelay():number;

	public drawBackground():void;
	public backRect():Rect;
	public backColor():string;
	public backPaintOpacity():number;

	public drawLineText(index:number):void;

	public startTurn():void;

	public startAction(subject:Game_Battler, action:Game_Action, targets:Game_Battler[]):void;
	public endAction(subject:Game_Battler):void;

	public displayCurrentState(subject:Game_Battler):void;
	public displayRegeneration(subject:Game_Battler):void;

	public displayAction(subject:Game_Battler, item:RPG_ItemBase):void;

	public displayCounter(target:Game_Battler):void;
	public displayReflection(target:Game_Battler):void;

	public displaySubstitute(substitute:Game_Battler, target:Game_Battler):void;
	public displayActionResults(subject:Game_Battler, target:Game_Battler):void;

	public displayFailure(target:Game_Battler):void;
	public displayCritical(target:Game_Battler):void;
	public displayDamage(target:Game_Battler):void;
	public displayMiss(target:Game_Battler):void;
	public displayEvasion(target:Game_Battler):void;
	public displayHpDamage(target:Game_Battler):void;
	public displayMpDamage(target:Game_Battler):void;
	public displayTpDamage(target:Game_Battler):void;
	public displayAffectedStatus(target:Game_Battler):void;
	public displayAutoAffectedStatus(target:Game_Battler):void;
	public displayChangedStates(target:Game_Battler):void;
	public displayAddedStates(target:Game_Battler):void;
	public displayRemovedStates(target:Game_Battler):void;
	public displayChangedBuffs(target:Game_Battler):void;
	public displayBuffs(target:Game_Battler, buffs:number[], fmt:string):void;

	public makeHpDamageText(target:Game_Battler):string;
	public makeMpDamageText(targett:Game_Battler):string;
	public makeTpDamageText(target:Game_Battler):string;
}

interface Method
{
	name:string;
	params:any[];
}
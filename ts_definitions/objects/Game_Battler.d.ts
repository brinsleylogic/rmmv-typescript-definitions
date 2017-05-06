//-----------------------------------------------------------------------------
// Game_Battler
//
// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.

declare class Game_Battler extends Game_BattlerBase
{
    protected _actions:Game_Action[];
    protected _speed:number;
    protected _result:Game_ActionResult;
    protected _actionState:string;
    protected _lastTargetIndex:number;
    protected _animations:BattlerAnimation[];
    protected _damagePopup:boolean;
    protected _effectType:string;
    protected _motionType:string;
    protected _weaponImageId:number;
    protected _motionRefresh:boolean;
    protected _selected:boolean;

	public constructor();

	public clearAnimations():void;
	public clearDamagePopup():void;
	public clearWeaponAnimation():void;
	public clearEffect():void;
	public clearMotion():void;

	public requestEffect(effectType:string):void;
	public requestMotion(motionType:string):void;
	public requestMotionRefresh():void;

	public select():void;
	public deselect():void;

	public isAnimationRequested():boolean;
	public isDamagePopupRequested():boolean;
	public isEffectRequested():boolean;
	public isMotionRequested():boolean;
	public isWeaponAnimationRequested():boolean;
	public isMotionRefreshRequested():boolean;
	public isSelected():boolean;

	public effectType():string;
	public motionType():string;
	public weaponImageId():number;

	public shiftAnimation():BattlerAnimation;

	public startAnimation(animationId:number, mirror:boolean, delay:number):void;
	public startDamagePopup():void;
	public startWeaponAnimation(weaponImageId:number):void;

	public action(index:number):Game_Action;
	public setAction(index:number, action:Game_Action):void;
	public numActions():number;
	public clearActions():void;

	public result():Game_ActionResult;
	public clearResult():void;

	public refresh():void;

	public addState(stateId:number):void;
	public isStateAddable(stateId:number):boolean;
	public isStateRestrict(stateId:number):void;
	public onRestrict():void;
	public removeState(stateId:number):void;

	public escape():void;

	public addBuff(paramId:number, turns:number):void;
	public addDebuff(paramId:number, turns:number):void;
	public removeBuff(paramId:number):void;
	public removeBattleStates():void;
	public removeAllBuffs():void;
	public removeStatesAuto(timing:number):void;
	public removeBuffsAuto():void;
	public removeStatesByDamage():void;

	public makeActionTimes():number;
	public makeActions():void;

	public speed():number;

	public makeSpeed():number;

	public currentAction():Game_Action;

	public removeCurrentAction():void;

	public setLastTarget(target:Game_Battler):void;

	public forceAction(skillId:number, targetIndex:number):void;

	public useItem(item:Game_Item):void;
	public consumeItem(ite:Game_Item):void;

	public gainHp(value:number):void;
	public gainMp(value:number):void;

	public gainTp(value:number):void;
	public gainSilentTp(value:number):void;
	public initTp():void;
	public clearTp():void;
	public chargeTpByDamage(damageRate:number):void;

	public regenerateHp():void;

	public maxSlipDamage():number;

	public regenerateMp():void;
	public regenerateTp():void;
	public regenerateAll():void;

	public onBattleStart():void;
	public onAllActionsEnd():void;
	public onTurnEnd():void;
	public onBattleEnd():void;
	public onDamage(value:number):void;

	public setActionState(actionState:string):void;

	public isUndecided():boolean;
	public isInputting():boolean;
	public isWaiting():boolean;
	public isActing():boolean;
	public isChanting():boolean;
	public isGuardWaiting():boolean;

	public performActionStart(action:Game_Action):void;
	public performAction(action:Game_Action):void;
	public performActionEnd():void;
	public performDamage():void;
	public performMiss():void;
	public performRecovery():void;
	public performEvasion():void;
	public performMagicEvasion():void;
	public performCounter():void;
	public performReflection():void;
	public performSubstitute(target:Game_Battler):void;
	public performCollapse():void;
}

interface BattlerAnimation
{
	animationId:number;
	mirror:boolean;
	delay:number;
}
//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.

declare class Game_Action
{
	public static readonly EFFECT_RECOVER_HP:number;
	public static readonly EFFECT_RECOVER_MP:number;
	public static readonly EFFECT_GAIN_TP:number;
	public static readonly EFFECT_ADD_STATE:number;
	public static readonly EFFECT_REMOVE_STATE:number;
	public static readonly EFFECT_ADD_BUFF:number;
	public static readonly EFFECT_ADD_DEBUFF:number;
	public static readonly EFFECT_REMOVE_BUFF:number;
	public static readonly EFFECT_REMOVE_DEBUFF:number;
	public static readonly EFFECT_SPECIAL:number;
	public static readonly EFFECT_GROW:number;
	public static readonly EFFECT_LEARN_SKILL:number;
	public static readonly EFFECT_COMMON_EVENT:number;
	public static readonly SPECIAL_EFFECT_ESCAPE:number;
	public static readonly HITTYPE_CERTAIN:number;
	public static readonly HITTYPE_PHYSICAL:number;
	public static readonly HITTYPE_MAGICAL:number;

	protected _subjectActorId:number;
	protected _subjectEnemyIndex:number;
	protected _forcing:boolean;
	protected _item:Game_Item;
	protected _targetIndex:number;

	public constructor(subject:Game_Battler, forcing:boolean);

	public clear():void;

	public setSubject(subject:Game_Battler):void;
	public subject():Game_Battler;

	public friendsUnit():Game_Unit;
	public opponentsUnit():Game_Unit;

	public setEnemyAction(action:EnemyAction):void;
	public setTarget(targetIndex:number):void;

	public setAttack():void;
	public setGuard():void;
	public setSkill(skillId:number):void;

	public setItem(itemId:number):void;
	public setItemObject(object:RPG_ItemBase):void;

	public item():Game_Item;

	public isSkill():boolean;
	public isItem():boolean;

	public numRepeats():number;

	public checkItemScope(list:number[]):boolean;
	public isForOpponent():boolean;
	public isForFriend():boolean;
	public isForDeadFriend():boolean;
	public isForUser():boolean;
	public isForOne():boolean;
	public isForRandom():boolean;
	public isForAll():boolean;

	public needsSelection():boolean;

	public numTargets():number;

	public checkDamageType(list:number[]):boolean;
	public isHpEffect():boolean;
	public isMpEffect():boolean;
	public isDamage():boolean;
	public isRecover():boolean;
	public isDrain():boolean;
	public isHpRecover():boolean;
	public isMpRecover():boolean;

	public isCertainHit():boolean;
	public isPhysical():boolean;
	public isMagical():boolean;
	public isAttack():boolean;
	public isGuard():boolean;
	public isMagicSkill():boolean;

	public decideRandomTarget():void;
	public setConfusion():void;

	public prepare():void;

	public isValid():boolean;

	public speed():number;

	public makeTargets():Game_Battler[];
	public repeatTargets(targets:Game_Battler[]):Game_Battler[];

	public confusionTarget():Game_Battler;
	public itemTargetCandidates():Game_Battler[];
	public targetsForOpponents():Game_Battler[];
	public targetsForFriends():Game_Battler[];

	public evaluate():number;
	public evaluateWithTarget(target:Game_Battler):number;

	public testApply(target:Game_Battler):boolean;

	public hasItemAnyValidEffects(target:Game_Battler):boolean;

	public testItemEffect(target:Game_Battler, effect:number):boolean;

	public itemCnt(target:Game_Battler):number;
	public itemMrf(target:Game_Battler):number;
	public itemHit(target:Game_Battler):number;
	public itemEva(target:Game_Battler):number;
	public itemCri(target:Game_Battler):number;

	public apply(target:Game_Battler):void;
	public makeDamageValue(target:Game_Battler, critical:boolean):void;
	public evalDamageFormula(target:Game_Battler):number;

	public calcElementRate(target:Game_Battler):number;
	public elementsMaxRate(target:Game_Battler, elements:number[]):void;

	public applyCritical(damag:number):number;
	public applyVariance(damage:number, variance:number):number;
	public applyGuard(damage:number, target:number):number;

	public executeDamage(target:number, value:number):void;
	public executeHpDamage(target:Game_Battler, value:number):void;
	public executeMpDamage(target:Game_Battler, value:number):void;

	public gainDrainedHp(value:number):void;
	public gainDrainedMp(value:number):void;

	public applyItemEffect(target:Game_Battler, effect:Effect):void;
	public itemEffectRecoverHp(target:Game_Battler, effect:Effect):void;
	public itemEffectRecoverMp(target:Game_Battler, effect:Effect):void;
	public itemEffectGainTp(target:Game_Battler, effect:Effect):void;
	public itemEffectAddState(target:Game_Battler, effect:Effect):void;
	public itemEffectAddAttackState(target:Game_Battler, effect:Effect):void;
	public itemEffectAddNormalState(target:Game_Battler, effect:Effect):void;
	public itemEffectRemoveState(target:Game_Battler, effect:Effect):void;
	public itemEffectAddBuff(target:Game_Battler, effect:Effect):void;
	public itemEffectAddDebuff(target:Game_Battler, effect:Effect):void;
	public itemEffectRemoveBuff(target:Game_Battler, effect:Effect):void;
	public itemEffectRemoveDebuff(target:Game_Battler, effect:Effect):void;
	public itemEffectSpecial(target:Game_Battler, effect:Effect):void;
	public itemEffectGrow(target:Game_Battler, effect:Effect):void;
	public itemEffectLearnSkill(target:Game_Battler, effect:Effect):void;
	public itemEffectCommonEvent(target:Game_Battler, effect:Effect):void;

	public makeSuccess(target:Game_Battler):void;

	public applyItemUserEffect(target:Game_Battler):void;

	public lukEffectRate(target:Game_Battler):number;

	public applyGlobal():void;
}
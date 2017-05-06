//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

declare class Game_BattlerBase
{
	public static readonly TRAIT_ELEMENT_RATE:number;
	public static readonly TRAIT_DEBUFF_RATE:number;
	public static readonly TRAIT_STATE_RATE:number;
	public static readonly TRAIT_STATE_RESIST:number
	public static readonly TRAIT_PARAM:number;
	public static readonly TRAIT_XPARAM:number;
	public static readonly TRAIT_SPARAM:number;
	public static readonly TRAIT_ATTACK_ELEMENT:number;
	public static readonly TRAIT_ATTACK_STATE:number;
	public static readonly TRAIT_ATTACK_SPEED:number;
	public static readonly TRAIT_ATTACK_TIMES:number;
	public static readonly TRAIT_STYPE_ADD:number;
	public static readonly TRAIT_STYPE_SEAL:number;
	public static readonly TRAIT_SKILL_ADD:number;
	public static readonly TRAIT_SKILL_SEAL:number;
	public static readonly TRAIT_EQUIP_WTYPE:number;
	public static readonly TRAIT_EQUIP_ATYPE:number;
	public static readonly TRAIT_EQUIP_LOCK:number;
	public static readonly TRAIT_EQUIP_SEAL:number;
	public static readonly TRAIT_SLOT_TYPE:number;
	public static readonly TRAIT_ACTION_PLUS:number;
	public static readonly TRAIT_SPECIAL_FLAG:number;
	public static readonly TRAIT_COLLAPSE_TYPE:number;
	public static readonly TRAIT_PARTY_ABILITY:number;
	public static readonly FLAG_ID_AUTO_BATTLE:number;
	public static readonly FLAG_ID_GUARD:number;
	public static readonly FLAG_ID_SUBSTITUTE:number;
	public static readonly FLAG_ID_PRESERVE_TP:number;
	public static readonly ICON_BUFF_START:number;
	public static readonly ICON_DEBUFF_START:number;

	/** Hit points */
	public hp:number;
	/** Magic points */
	public mp:number;
	/** Tactical points */
	public tp:number;
	/** Max hit points */
	public mhp:number;
	/** Max magic points */
	public mmp:number;
	/** Attack power */
	public atk:number;
	/** Defense Power */
	public def:number;
	/** Magic attackpower */
	public mat:number;
	/** Magic defense power */
	public mdf:number;
	/** Agility */
	public agi:number;
	/** Luck */
	public luk:number;
	/** Hit rate */
	public hit:number;
	/** Evasion rate */
	public eva:number;
	/** Critical rate */
	public cri:number;
	/** Hit points */
	public cev:number;
	/** Magic evasion rate */
	public mev:number;
	/** Magic reflection rate */
	public mrf:number;
	/** Counter-attack rate */
	public cnt:number;
	/** HP regeneration rate */
	public hrg:number;
	/** MP regeneration rate */
	public mrg:number;
	/** TP regeneration rate */
	public trg:number;
	/** Target rate */
	public tgr:number;
	/** Guard effect rate */
	public grd:number;
	/** Recovery effect rate */
	public rec:number;
	/** Pharmacology */
	public pha:number;
	/** MP cost rate */
	public mcr:number;
	/** TP charge rate */
	public tcr:number;
	/** Physical damage rate */
	public pdr:number;
	/** Floor-damage rate */
	public mdr:number;
	/** Floor-damage rate */
	public fdr:number;
	/** Experience rate */
	public exr:number;
	
	protected _hp:number;
	protected _mp:number;
	protected _tp:number;
	protected _hidden:boolean;
	protected _paramPlus:[number,number,number,number,number,number,number,number];
	protected _states:number[];
	protected _stateTurns:{ [n:number]:number };
	protected _buffs:[number,number,number,number,number,number,number,number];
	protected _buffTurns:[number,number,number,number,number,number,number,number];

	public constructor();

	public initMembers():void;
	public clearParamPlus():void;
	public clearStates():void;
	
	public eraseState(stateId:number):void;
	public isStateAffected(stateId:number):boolean;
	public isDeathStateAffected():boolean;

	public deathStateId():number;
	public resetStateCounts(stateId:number):void;
	public isStateExpired(stateId:number):boolean;

	public updateStateTurns():void;

	public clearBuffs():void;
	public eraseBuff(paramId:number):void;
	public buffLength():number;
	public buff(paramId:number):number;
	public isBuffAffected(paramId:number):boolean;
	public isDebuffAffected(paramId:number):boolean;
	public isBuffOrDebuffAffected(paramId:number):boolean;
	public isMaxBuffAffected(paramId:number):boolean;
	public isMaxDebuffAffected(paramId:number):boolean;
	public increaseBuff(paramId:number):void;
	public decreaseBuff(paramId:number):void;
	public overwriteBuffTurns(paramId:number, turns:number):void;
	public isBuffExpired(paramId:number):boolean;
	public updateBuffTurns():void;

	public die():void;
	public revive():void;

	public states():number[];
	public stateIcons():number[];
	public buffIcons():number[];
	public buffIconIndex(buffLevel:number, paramId:number):number;
	public allIcons():number[];

	public traitObjects():number[];
	public allTraits():number[];
	public traits(code:number):number[];
	public traitsWithId(code:number, id:number):number;
	public traitsPi(code:number, id:number):number;
	public traitsSum(code:number, id:number):number;
	public traitsSumAll(code:number):number;
	public traitsSet(code:number):number[];

	public paramBase(paramId:number):number;
	public paramPlus(paramId:number):void;
	public paramMin(paramId:number):void;
	public paramMax(param:number):void;
	public paramRate(param:number):void;
	public paramBuffRate(param:number):void;
	public param(param:number):void;
	public xparam(xparam:number):void;
	public sparam(sparam:number):void;

	public elementRate(elementId:number):void;
	public debuffRate(param:number):void;
	public stateRate(stateId:number):void;

	public stateResistSet():number[];
	public isStateResist(stateId:number):boolean;

	public attackElements():number[];
	public attackStates():number[];
	public attackStatesRate(stateId:number):number;
	public attackSpeed():number;
	public attackTimesAdd():number;

	public addedSkillTypes():number[];
	public isSkillTypeSealed(stypeId:number):boolean;

	public addedSkills():number[];
	public isSkillSealed(skillId:number):boolean;

	public isEquipWtypeOk(wtypeId:number):boolean;
	public isEquipAtypeOk(atypeId:number):boolean;
	public isEquipTypeLocked(etypeId:number):boolean;
	public isEquipTypeSealed(etypeId:number):boolean;

	public slotType():number;

	public isDualWield():boolean;

	public actionPlusSet():number[];

	public specialFlag(flagId:number):boolean;

	public collapseType():number;

	public partyAbility(abilityId:number):boolean;

	public isAutoBattle():boolean;

	public isGuard():boolean;
	public isSubstitute():boolean;
	public isPreserveTp():boolean;

	public addParam(paramId:number, value:number):void;

	public setHp(hp:number):void;
	public setMp(mp:number):void;
	public setTp(tp:number):void;
	public maxTp():number;

	public refresh():void;

	public recoverAll():void;

	public hpRate():number;
	public mpRate():number;
	public tpRate():number;

	public hide():void;
	public appear():void;
	public isHidden():boolean;
	public isAppeared():boolean;

	public isDead():boolean;
	public isAlive():boolean;
	public isDying():boolean;
	public isRestricted():boolean;

	public canInput():boolean;
	public canMove():boolean;

	public isConfused():boolean;
	public confusionLevel():number;

	public isActor():boolean;
	public isEnemy():boolean;

	public index():number;
	public isBattleMember():boolean;
	public isSpriteVisible():boolean;

	public sortStates():void;

	public restriction():number;

	public addNewState(stateId:number):void;

	public onRestrict():void;

	public mostImportantStateText():string;

	public stateMotionIndex():number;
	public stateOverlayIndex():number;

	public isSkillWtypeOk(skill:DataSkill):boolean;
	public skillMpCost(skill:DataSkill):number;
	public skillTpCost(skill:DataSkill):number;
	public canPaySkillCost(skill:DataSkill):boolean;
	public paySkillCost(skill:number):void;

	public isOccasionOk(item:RPG_ItemBase):boolean;

	public meetsUsableItemConditions(item:DataItem):boolean;
	public meetsSkillConditions(skill:DataSkill):boolean;
	public meetsItemConditions(item:RPG_ItemBase):boolean;

	public canUse(item:RPG_ItemBase):boolean;
	public canEquip(item:RPG_ItemBase):boolean;
	public canEquipWeapon(item:RPG_ItemBase):boolean;
	public canEquipArmor(item:RPG_ItemBase):boolean;

	public attackSkillId():number;
	public guardSkillId():number;

	public canAttack():boolean;
	public canGuard():boolean;
}
//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

declare class Game_Actor extends Game_Battler
{
	protected _actorId:number;
    protected _name:string;
    protected _nickname:string;
    protected _classId:number;
    protected _level:number;
    protected _characterName:string;
    protected _characterIndex:number;
    protected _faceName:string;
    protected _faceIndex:number;
    protected _battlerName:string;
    protected _exp:{ [classId:number]: number};
	protected _skills:number[];
	protected _equips:Game_Item[];
	protected _actionInputIndex:number;
	protected _lastMenuSkill:Game_Item;
	protected _lastBattleSkill:Game_Item;
	protected _lastCommandSymbol:string; 

	public readonly level:number;

	public constructor(actorId:number);

	public setup(actorId:number):void;

	public actorId():number;
	public actor():DataActor;

	public name():string;
	public setName(name:string):void;

	public nickname():string;
	public setNickname(nickname:string):void;

	public profile():string;
	public setProfile(profile:string):void;

	public characterName():string;
	public characterIndex():number;

	public faceName():string;
	public faceIndex():number;

	public battlerName():string;

	public eraseState(stateId:number):void;

	public initImages():void;

	public expForLevel(level:number):number;

	public initExp():void;

	public currentExp():number;
	public currentLevelExp():number;
	public nextLevelExp():number;
	public nextRequiredExp():number;

	public maxLevel():number;
	public isMaxLevel():number;

	public initSkills():void;

	public initEquips(equips:number[]):void;
	public equipSlots():number[];
	public equips():RPG_EquipBase[];
	public weapons():DataWeapon[];
	public armors():DataArmor[];
	public hasWeapon(weapon:number):boolean;
	public hasArmor(armor:number):boolean;

	public isEquipChangeOk(slotId:number):boolean;
	public changeEquip(slotId:number, item:RPG_EquipBase):void;
	public forceChangeEquip(slotId:number, item:RPG_EquipBase):void;
	public tradeItemWithParty(newItem:RPG_EquipBase, oldItem:RPG_EquipBase):boolean;
	public changeEquipById(etypeId:number, itemId:number):void;

	public isEquipped(item:RPG_EquipBase):boolean;
	public discardEquip(item:RPG_EquipBase):void;
	public releaseUnequippableItems(forcing:boolean):void;
	public clearEquipments():void;
	public optimizeEquipments():void;
	public bestEquipItem(slotId:number):number;
	public calcEquipItemPerformance(item:RPG_EquipBase):number;
	public isWtypeEquipped(wtypeId:number):boolean;

	public friendsUnit():Game_Party;
	public opponentsUnit():Game_Troop;

	public isFormationChangeOk():boolean;

	public currentClass():DataClass;
	public isClass(gameClass:DataClass):boolean;

	public skills():DataSkill[];
	public usableSkills():DataSkill[];

	public hasNoWeapons():boolean;
	public bareHandsElementId():number;
	public attackAnimationId1():number;
	public attackAnimationId2():number;
	public bareHandsAnimationId():number;

	public changeExp(exp:number, show:boolean):void;
	public levelUp():void;
	public levelDown():void;

	public findNewSkills(lastSkills:DataSkill[]):DataSkill[];

	public displayLevelUp(newSkills:DataSkill):void;
	public gainExp(exp:number):void;
	public finalExpRate():number;
	public benchMembersExpRate():number;
	public shouldDisplayLevelUp():boolean;

	public changeLevel(level:number, show:boolean):void;
	public learnSkill(skillId:number):void;
	public forgetSkill(skillId:number):void;
	public isLearnedSkill(skillId:number):boolean;
	public hasSkill(skillId:number):boolean;

	public changeClass(classId:number, keepExp:boolean):void;

	public setCharacterImage(characterName:string, characterIndex:number):void;
	public setFaceImage(faceName:string, faceIndex:number):void;
	public setBattlerImage(battlerName:string):void;

	public performAttack():void;
	public performVictory():void;
	public performEscape():void;

	public makeActionList():Game_Action[];
	public makeAutoBattleActions():void;
	public makeConfusionActions():void;

	public onPlayerWalk():void;

	public updateStateSteps(state:DataState):void;
	public showAddedStates():void;
	public showRemovedStates():void;

	public stepsForTurn():number;
	public turnEndOnMap():void;

	public checkFloorEffect():void;
	public executeFloorDamage():void;
	public basicFloorDamage():number;
	public maxFloorDamage():number;

	public performMapDamage():void;

	public inputtingAction():boolean;

	public selectNextCommand():boolean;
	public selectPreviousCommand():boolean;

	public lastMenuSkill():DataSkill;
	public setLastMenuSkill(skill:number):void;
	public lastBattleSkill():DataSkill;
	public setLastBattleSkill(skill:number):void;
	public lastCommandSymbol():string;
	public setLastCommandSymbol(symbol:string):void;

	public testEscape(item:RPG_ItemBase):boolean;
	public meetsUsableItemConditions(item:RPG_ItemBase):boolean;
}
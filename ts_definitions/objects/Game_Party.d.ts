//-----------------------------------------------------------------------------
// Game_Party
//
// The game object class for the party. Information such as gold and items is
// included.

declare class Game_Party extends Game_Unit
{
	public readonly ABILITY_ENCOUNTER_HALF:number;
	public readonly ABILITY_ENCOUNTER_NONE:number;
	public readonly ABILITY_CANCEL_SURPRISE:number;
	public readonly ABILITY_RAISE_PREEMPTIVE:number;
	public readonly ABILITY_GOLD_DOUBLE:number;
	public readonly ABILITY_DROP_ITEM_DOUBLE:number;

	protected _gold:number;
	protected _steps:number;
	protected _lastItem:Game_Item;
	protected _menuActorId:number;
	protected _targetActorId:number;
	protected _actors:Game_Actor[];
	protected _items:{ [n:number]: number };
	protected _weapons:{ [n:number]: number };
	protected _armors:{ [n:number]: number };

	public constructor();

	public initAllItems():void;

	public exists():boolean;
	public size():number;

	public isEmpty():boolean;

	public members():Game_Actor[];
	public allMembers():Game_Actor[];
	public battleMembers():Game_Actor[];

	public maxBattleMembers():number;

	public leader():Game_Actor;

	public reviveBattleMembers():void;

	public items():DataItem[];
	public weapons():DataWeapon[];
	public armors():DataArmor[];

	public equipItems():RPG_EquipBase[];
	public allItems():RPG_ItemBase[];

	public itemContainer(item:RPG_ItemBase):{ [n:number]: number };

	public name():string;

	public setupStartingMembers():void;
	public setupBattleTest():void;
	public setupBattleTestMembers():void;
	public setupBattleTestItems():void;

	public highestLevel():number;

	public addActor(actorId:number):void;
	public removeActor(actorId:number):void;

	public gold():number;
	public gainGold(amount:number):void;
	public loseGold(amount:number):void;
	public maxGold():number;

	public steps():number;
	public increaseSteps():void;

	public numItems(item:RPG_ItemBase):number;
	public maxItems(item:RPG_ItemBase):number;
	public hasMaxItems(item:RPG_ItemBase):boolean;

	public hasItem(item:RPG_ItemBase, includeEquip:boolean):boolean;

	public isAnyMemberEquipped(item:RPG_EquipBase):boolean;

	public gainItem(item:RPG_ItemBase, amount:number, includeEquip:boolean):void;

	public discardMembersEquip(item:RPG_EquipBase, amount:number):void;

	public loseItem(item:RPG_ItemBase, amount:number, includeEquip:boolean):void;
	public consumeItem(item:RPG_ItemBase):void;

	public canUse(item:RPG_ItemBase):boolean;
	public canInput():boolean;
	public isAllDead():boolean;

	public onPlayerWalk():void;

	public menuActor():Game_Actor;
	public setMenuActor(actor:Game_Actor):void;
	public makeMenuActorNext():void;
	public makeMenuActorPrevious():void;

	public targetActor():Game_Actor;
	public setTargetActor(actor:Game_Actor):void;

	public lastItem():RPG_ItemBase;
	public setLastItem(item:RPG_ItemBase):void;

	public swapOrder(index1:number, index2:number):void;

	public charactersForSavefile():[string, number][];
	public facesForSavefile():[string, number][];

	public partyAbility(abilityId:number):boolean;
	public hasEncounterHalf():boolean;
	public hasEncounterNone():boolean;
	public hasCancelSurprise():boolean;
	public hasRaisePreemptive():boolean;
	public hasGoldDouble():boolean;
	public hasDropItemDouble():boolean;

	public ratePreemptive(troopAgi:number):number;
	public rateSurprise(troopAgi:number):number;

	public performVictory():void;
	public performEscape():void;

	public removeBattleStates():void;

	public requestMotionRefresh():void;
}
//-----------------------------------------------------------------------------
// Game_Item
//
// The game object class for handling skills, items, weapons, and armor. It is
// required because save data should not include the database object itself.

declare class Game_Item
{
	protected _dataClass:String;
	protected _itemId:number;

	public constructor(item?:RPG_ItemBase);

	public isSkill():boolean;
	public isItem():boolean;
	public isUsableItem():boolean;
	public isWeapon():boolean;
	public isArmor():boolean;
	public isEquipItem():boolean;
	public isNull():boolean;
	
	public itemId():number;
	
	public object():RPG_ItemBase;
	public setObject(item:RPG_ItemBase):void;

	public setEquip(isWeapon:boolean, itemId:number):void;
}
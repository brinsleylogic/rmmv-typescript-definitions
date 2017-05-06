//-----------------------------------------------------------------------------
// Scene_Skill
//
// The scene class of the skill screen.
declare class Scene_Skill extends Scene_ItemBase
{
	protected _statusWindow:Window_SkillStatus;
	protected _itemWindow:Window_SkillList;
	protected _skillTypeWindow:Window_SkillType;
	
	public createSkillTypeWindow():void;
	public createStatusWindow():void;
	public createItemWindow():void;
	public refreshActor():void;
	public commandSkill():void;
	public item():RPG_ItemBase;
	public onItemOk():void;
	public onItemCancel():void;
	public playSeForItem():void;
}
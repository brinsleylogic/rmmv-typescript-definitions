//-----------------------------------------------------------------------------
// Window_SkillList
//
// The window for selecting a skill on the skill screen.

declare class Window_SkillList extends Window_Selectable
{
	protected _actor:Game_Actor;
	protected _stypeId:number;
	protected _data:DataSkill[];

	public setActor(actor:Game_Actor):void
	public setStypeId(stypeId:number):void;

	public selectLast():void;

	public costWidth():number;
	public drawSkillCost(skill:DataSkill, x:number, y:number, width:number):void;
}
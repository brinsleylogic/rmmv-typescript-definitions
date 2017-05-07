//-----------------------------------------------------------------------------
// Window_SkillType
//
// The window for selecting a skill type on the skill screen.

declare class Window_SkillType extends Window_Command
{
	protected _actor:Game_Actor;

	public setActor(actor:Game_Actor):void;

	public setSkillWindow(skillWindow:Window_SkillList):void;

	public selectLast():void;
}
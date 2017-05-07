//-----------------------------------------------------------------------------
// Window_BattleStatus
//
// The window for displaying the status of party members on the battle screen.

declare class Window_BattleStatus extends Window_Selectable
{
	public constructor();

	public windowWidth():number;
	public windowHeight():number;

	public basicAreaRect(index:number):Rectangle;
	public gaugeAreaRect(index:number):Rectangle;

	public gaugeAreaWidth():number;

	public drawBasicArea(rect:Rectangle, actor:Game_Actor):void;
	public drawGaugeArea(rect:Rectangle, actor:Game_Actor):void;
	public drawGaugeAreaWithTp(rect:Rectangle, actor:Game_Actor):void;
	public drawGaugeAreaWithoutTp(rect:Rectangle, actor:Game_Actor):void;
}
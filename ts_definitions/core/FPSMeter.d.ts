// FPSMeter 0.3.1 - 9th May 2013
// https://github.com/Darsain/fpsmeter
declare class FPSMeter
{
	public isPaused:boolean;

	public show():void;
	public hide():void;

	public showFps():void;
	public showDuration():void;

	public tickStart():void;
	public tick():void;
}
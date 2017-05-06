//-----------------------------------------------------------------------------
// Scene_Base
//
// The superclass of all scenes within the game.
declare class Scene_Base extends Stage
{
	protected _active:boolean;
	protected _fadeSign:number;
	protected _fadeDuration:number;
	protected _fadeSprite:Sprite;
	
	public create():void;
	public isActive():boolean;
	public isReady():boolean;
	public start():void;
	public update():void;
	public stop():void;
	public isBusy():boolean;
	public terminate():void;
	public createWindowLayer():void;
	public addWindow(window:Window):void;
	public startFadeIn(duration:number, white:boolean):void;
	public startFadeOut(duration:number, white:boolean):void;
	public createFadeSprite(white:boolean):void;
	public updateFade():void;
	public updateChildren():void;
	public popScene():void;
	public checkGameover():void;
	public fadeOutAll():void;
	public fadeSpeed():number;
	public slowFadeSpeed():number;
}
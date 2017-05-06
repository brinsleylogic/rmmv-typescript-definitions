//-----------------------------------------------------------------------------
// Sprite_Animation
//
// The sprite for displaying an animation.
declare class Sprite_Animation extends Sprite
{
	/**
	 * { DataAnimation: boolean }
	 */
	protected static _checker1:{};
	protected static _checker2:{};

	protected _target:Sprite_Base;
	protected _reduceArtifacts:boolean;
    protected _animation:DataAnimation;
    protected _mirror:boolean;
    protected _delay:number;
    protected _rate:number;
    protected _duration:number;
    protected _flashColor:[number, number, number, number];
    protected _flashDuration:number;
    protected _screenFlashDuration:number;
    protected _hidingDuration:number;
    protected _bitmap1:Bitmap;
    protected _bitmap2:Bitmap;
    protected _cellSprites:Sprite[];
    protected _screenFlashSprite:ScreenSprite;
    protected _duplicated:boolean;

	public remove():void;

	public setupRate():void;
	public setupDuration():void;

	public updateMain():void;
	public updateFlash():void;
	public updateScreenFlash():void;
	public updateHiding():void;
	public updatePosition():void;
	public updateFrame():void;
	public updateAllCellSprites():void;
	public updateCellSprite():void;

	public absoluteX():number;
	public absoluteY():number;

	public isPlaying():boolean;
	public isReady():boolean;
	public currentFrameIndex():number;
	public loadBitmaps():void;

	public createSprites():void;
	public createCellSprites():void;
	public createScreenFlashSprite():void;

	public processTimingData():void;
	
	public startFlash(color:[number, number, number, number], duration:number):void;
	public startScreenFlash(color:[number, number, number, number], duration:number):void;
	public startHiding(duration:number):void;
}

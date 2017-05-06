//-----------------------------------------------------------------------------
// Sprite_Damage
//
// The sprite for displaying a popup damage.
declare class Sprite_Damage extends Sprite
{
	protected _duration:number;
    protected _flashColor:[number, number, number, number];
    protected _flashDuration:number;
    protected _damageBitmap:Bitmap;

	public setup(target:Game_Battler):void;
	public setupCriticalEffect():void;

	public digitWidth():number;
	public digitHeight():number;

	public createMiss():void;
	public createDigits(baseRow:number, value:number):void;
	public createChildSprite():Sprite;

	public updateChild():void;
	public updateFlash():void;
	public updateOpacity():void;

	public isPlaying():boolean;
}
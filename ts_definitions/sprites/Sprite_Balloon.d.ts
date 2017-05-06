//-----------------------------------------------------------------------------
// Sprite_Balloon
//
// The sprite for displaying a balloon icon.

declare class Sprite_Balloon extends Sprite_Base
{
    protected _balloonId:number;
    protected _duration:number;

	public loadBitmap():void;

	public setup(balloonId:number):void;

	public updateFrame():void;

	public speed():number;
	public waitTime():number;

	public frameIndex():number;

	public isPlaying():boolean;
}
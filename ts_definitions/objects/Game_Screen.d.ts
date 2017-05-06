//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.

declare class Game_Screen
{
	protected _brightness:number;
	protected _fadeOutDuration:number;
	protected _fadeInDuration:number;
	protected _tone:number[];
	protected _toneTarget:number[];
	protected _toneDuration:number;
	protected _flashColor:number[];
	protected _flashDuration:number;
	protected _shakePower:number;
	protected _shakeSpeed:number;
	protected _shakeDuration:number;
	protected _shakeDirection:number;
	protected _shake:number;
	protected _zoomX:number;
	protected _zoomY:number;
	protected _zoomScale:number;
	protected _zoomScaleTarget:number;
	protected _zoomDuration:number;
	protected _weatherType:string;
	protected _weatherPower:number;
	protected _weatherPowerTarget:number;
	protected _weatherDuration:number;
	protected _pictures:{ [ n:number ]:Game_Picture };

	public constructor();
	public clear():void;

	public onBattleStart():void;

	public brightness():number;
	public tone():number[];

	public flashColor():number[];
	public shake():number;

	public zoomX():number;
	public zoomY():number;
	public zoomScale():number;

	public weatherType():string;
	public weatherPower():number;

	public picture(pictureId:number):Game_Picture;
	public realPictureId(pictureId:number):number;

	public clearFade():void;
	public clearTone():void;
	public clearFlash():void;
	public clearShake():void;
	public clearZoom():void;
	public clearWeather():void;
	public clearPictures():void;
	public eraseBattlePictures():void;

	public maxPictures():number;

	public startFadeOut(duration:number):void;
	public startFadeIn(duration:number):void;
	public startTint(tone:number[], duration:number):void;
	public startFlash(color:number[], duration:number):void;
	public startShake(power:number, speed:number, duration:number):void;

	public startZoom(x:number, y:number, scale:number, duration:number):void;
	public setZoom(x:number, y:number, scale:number):void;

	public changeWeather(type:string, power:number, duration:number):void;

	public update():void;
	public updateFadeOut():void;
	public updateFadeIn():void;
	public updateTone():void;
	public updateFlash():void;
	public updateShake():void;
	public updateZoom():void;
	public updateWeather():void;
	public updatePictures():void;

	public startFlashForDamage():void;

	public showPicture(pictureId:number, name:string, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number):void;
	public movePicture(pictureId:number, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number, duration:number):void;
	public rotatePicture(pictureId:number, speed:number):void;
	public tintPicture(pictureId:number, tone:number[], duration:number):void;
	public erasePicture(pictureId:number):void;
}
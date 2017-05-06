//-----------------------------------------------------------------------------
// Game_Picture
//
// The game object class for a picture.

declare class Game_Picture
{
	protected _name:string;
	protected _origin:number;
	protected _x:number;
	protected _y:number;
	protected _scaleX:number;
	protected _scaleY:number;
	protected _opacity:number;
	protected _blendMode:number;
	protected _targetX:number;
	protected _targetY:number;
	protected _targetScaleX:number;
	protected _targetScaleY:number;
	protected _targetOpacity:number;
	protected _duration:number;
	protected _tone:number[];
	protected _toneTarget:number[];
	protected _toneDuration:number;
	protected _angle:number;
	protected _rotationSpeed:number;

	public constructor();

	public name():string;
	public origin():number;
	public x():number;
	public y():number;
	public scaleX():number;
	public scaleY():number;
	public opacity():number;
	public blendMode():number;
	public tone():number[];
	public angle():number;

	public initBasic():void;
	public initTarget():void;
	public initTone():void;
	public initRotation():void;

	public show(name:string, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number):void;
	public move(origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number, duration:number):void;
	public rotate(speed:number):void;
	public tint(tone:number[], duration:number):void;

	public erase():void;

	public update():void;
	public updateMove():void;
	public updateTone():void;
	public updateRotation():void;
}
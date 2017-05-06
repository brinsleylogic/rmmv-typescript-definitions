//-----------------------------------------------------------------------------
// Sprite_Actor
//
// The sprite for displaying an actor.
declare class Sprite_Actor extends Sprite_Battler
{
	public static readonly MOTIONS:{ [state:string]: ActorMotion }

    protected _motion:ActorMotion;
    protected _motionCount:number;
    protected _pattern:number;	
    protected _effectTarget:Sprite_Base;	
    protected _mainSprite:Sprite_Base;	
    protected _shadowSprite:Sprite;	
    protected _weaponSprite:Sprite_Weapon;	
    protected _stateSprite:Sprite_StateOverlay;

	public moveToStartPosition():void;
	public setActorHome(index:number):void;

	public updateShadow():void;
	public updateTargetPosition():void;

	public setupMotion():void;
	public startMotion():void;
	public updateMotion():void;
	public updateMotionCount():void;
	public motionSpeed():number;
	public refreshMotion():void;
	public startEntryMotion():void;

	public stepForward():void;
	public stepBack():void;
	public retreat():void;
	public setupWeaponAnimation():void;
}

declare class ActorMotion
{
	index:number;
	loop:boolean;
}
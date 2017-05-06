//-----------------------------------------------------------------------------
// Game_Followers
//
// The wrapper class for a follower array.

declare class Game_Followers
{
	protected _visible:boolean;
	protected _gathering:boolean;
	protected _data:Game_Follower[];

	public constructor();

	public isVisible():boolean;

	public show():void;
	public hide():void;

	public follower(index:number):Game_Follower;

	public forEach(callback:Function, thisObject:Object):void;
	public reverseEach(callback:Function, thisObject:Object):void;

	public refresh():void;
	public update():void;
	public updateMove():void;

	public jumpAll():void;

	public synchronize(x:number, y:number, d:Direction):void;

	public gather():void;
	public areGathering():boolean;

	public visibleFollowers():Game_Follower[];

	public areMoving():boolean;
	public areGathered():boolean;
	public isSomeoneCollided(x:number, y:number):boolean;
}
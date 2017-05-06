//-----------------------------------------------------------------------------
// CacheMap
//
// Cache for images, audio, or any other kind of resource
declare class CacheMap
{
	public manager:any;
    public updateTicks:number;
    public lastCheckTTL:number;
    public delayCheckTTL:number;
    public updateSeconds:number;
	private _inner:{ [s:string]: CacheEntry };
	private _lastRemovedEntries:CacheEntry[];
	
	public constructor(manager:any);

	public checkTTL():void;
	public clear():void;

	public getItem(key:string):any;
	public setItem(key:string, item:any):CacheEntry;

	public update(ticks:number, delta:number):void;
}
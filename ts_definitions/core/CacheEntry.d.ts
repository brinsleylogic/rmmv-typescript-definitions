//-----------------------------------------------------------------------------
// CacheEntry
//
// The resource class. Allows to be collected as a garbage if not use for some time or ticks
declare class CacheEntry
{
    public cache:CacheMap;
    public key:string;
    public item:any;
    public cached:boolean;
    public touchTicks:number;
    public touchSeconds:number;
    public ttlTicks:number;
    public ttlSeconds:number;
    public freedByTTL:boolean;

	public constructor(cache:CacheMap, key:string, item:any);

	public free(byTTL:boolean):void;
	public allocate():CacheEntry;

	public setTimeToLive(ticks:number, seconds:number):CacheEntry;
	public isStillAlive():boolean;
	public touch():void;
}
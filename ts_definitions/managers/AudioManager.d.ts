//-----------------------------------------------------------------------------
// AudioManager
//
// The static class that handles BGM, BGS, ME and SE.
declare class AudioManager
{
	public static bgmVolume:number;
	public static bgsVolume:number;
	public static meVolume:number;
	public static seVolume:number;
	
	protected static _bgmVolume:number;
	protected static _bgsVolume:number;
	protected static _meVolume:number;
	protected static _seVolume:number;
	protected static _currentBgm:BGM;
	protected static _currentBgs:BGS;
	protected static _bgmBuffer:number;
	protected static _bgsBuffer:number;
	protected static _meBuffer:number;
	protected static _seBuffers:number[];
	protected static _protectedStaticBuffers:number[];
	protected static _replayFadeTime:number;
	protected static _path:string;
	
	public static playBgm(bgm:BGM, pos:number):void;
	public static replayBgm(bgm:BGM):void;
	public static isCurrentBgm(bgm:BGM):boolean;
	public static updateBgmParameters(bgm:BGM):void;
	public static updateCurrentBgm(bgm:BGM, pos:number):void;
	public static fadeOutBgm(duration:number):void;
	public static fadeInBgm(duration:number):void;
	public static stopBgm():void;
	
	public static playBgs(bgs:BGS, pos:number):void;
	public static replayBgs(bgs:BGS):void;
	public static isCurrentBgs(bgs:BGS):boolean;
	public static updateBgsParameters(bgs:BGS):void;
	public static updateCurrentBgs(bgs:BGS, pos:number):void;
	public static fadeOutBgs(duration:number):void;
	public static fadeInBgs(duration:number):void;
	public static stopBgs():void;

	public static playMe(me:{name:string}):void;
	public static updateMeParameters(me:{name:string}):void;
	public static fadeOutMe(duration:number):void;
	public static stopMe():void;

	public static playSe(se:{name:string}):void;
	public static updateSeParameters(buffer:Html5Audio, se:{name:string}):void;
	public static updateSeParameters(buffer:WebAudio, se:{name:string}):void;
	public static stopSe():void;

	public static playStaticSe(se:{name:string}):void;
	public static loadStaticSe(se:{name:string}):void;
	public static isStaticSe(se:{name:string}):boolean;

	public static stopAll():void;

	public static saveBgm():BGM_Cached;
	public static saveBgs():BGS_Cached;
	public static makeEmptyAudioObject():RPG_Audio;

	public static createBuffer(folder:string, name:string):Html5Audio;
	public static createBuffer(folder:string, name:string):WebAudio;
	public static updateBufferParameters(buffer:Html5Audio, configVolume:number, audio:{volume:number;pitch:number;pan:number}):void;
	public static updateBufferParameters(buffer:WebAudio, configVolume:number, audio:{volume:number;pitch:number;pan:number}):void;
	
	public static audioFileExt():string;
	public static shouldUseHtml5Audio():boolean;
	public static checkErrors():void;
	public static checkWebAudioErrors(webAudio:WebAudio):void;
	
}
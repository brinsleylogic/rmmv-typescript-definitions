//-----------------------------------------------------------------------------
// Html5Audio
//
//The static class that handles HTML5 Audio.
declare class Html5Audio
{
	public static url:string;
	public static volume:number;
	
	private static _initialized:boolean;
	private static _unlocked:boolean;
	private static _audioElement:HTMLAudioElement;
	private static _gainTweenInterval:number;
	private static _tweenGain:number;
	private static _tweenTargetGain:number;
	private static _tweenGainStep:number;
	private static _staticSePath:string;
	private static _url:string;
	
	public static setup(url:string):void;
	public static initialize():boolean;
	public static clear():void;
	public static setStaticSe(url:string):void;
	public static isReady():void;
	public static isError():void;
	public static isPlaying():void;
	public static play(loop:boolean, offset:number):void;
	public static stop():void;
	public static fadeIn(duration:number):void;
	public static fadeOut(duration:number):void;
	public static seek():number;
	public static addLoadListener(listener:Function):void;
	
	private static _setEventHandlers():void;
	private static _onTouchStart():void;
	private static _onVisibilityChange():void;
	private static _onLoadedData():void;
	private static _onError():void;
	private static _onEnded():void;
	private static _onHide():void;
	private static _onShow():void;
	private static _load(url:string):void;
	private static _startPlaying(loop:boolean, offset:number):void;
	private static _onLoad():void;
	private static _startGainTween(duration:number):void;
	private static _applyTweenPause(volume:number):void;
}
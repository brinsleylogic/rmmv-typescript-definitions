//-----------------------------------------------------------------------------
// WebAudio
//
// The audio object of Web Audio API.
declare class WebAudio
{
	protected static _createContext():void;
	protected static _detectCodecs():void;
	protected static _createMasterGainNode():void;
	protected static _setupEventHandlers():void;
	protected static _onTouchStart():void;
	protected static _onVisibilityChange():void;
	protected static _onHide():void;
	protected static _onShow():void;
	protected static _fadeIn(duration:number):void;
	protected static _fadeOut(duration:number):void;
	
	public static initialize(noAudio:boolean):void;
	public static canPlayOgg():boolean;
	public static canPlayM4a():boolean;
	
	public url:string;
	public volume:number;
	public pitch:number;
	public pan:number;
	
	protected _context:AudioContext;
	protected _masterGainNode:GainNode;
	protected _initialized:boolean;
	protected _unlocked:boolean;
	protected _buffer:AudioBuffer;
	protected _sourceNode:AudioBufferSourceNode;
	protected _gainNode:GainNode;
	protected _pannerNode:PannerNode;
	protected _totalTime:number;
	protected _sampleRate:number;
	protected _loopStart:number;
	protected _loopLength:number;
	protected _startTime:number;
	protected _volume:number;
	protected _pitch:number;
	protected _pan:number;
	protected _endTimer:number;
	protected _loadListeners:Function[];
	protected _stopListeners:Function[];
	protected _hasError:boolean;
	protected _autoPlay:boolean;
	
	public constructor(url:string);
	
	public clear():void;
	public isReady():boolean;
	public isError():boolean;
	public isPlaying():boolean;
	public stop():void;
	public fadeIn(duration:number):void;
	public fadeOut(duration:number):void;
	public seek():number;
	public addLoadListener(listener:Function):void;
	public addStopListener(listener:Function):void;
	
	protected _load(url:string):void;
	protected _onXhrLoad(xhr:XMLHttpRequest):void;
	protected _startPlaying(loop:boolean, offset:number):void;
	protected _createNodes():void;
	protected _connectNodes():void;
	protected _removeNodes():void;
	protected _createEndTimer():void;
	protected _removeEndTimer():void;
	protected _updatePanner():void;
	protected _onLoad():void;
	protected _readLoopComments(array:string[]):void;
	protected _readOgg(array:string[]):void;
	protected _readMp4(array:string[]):void;
	protected _readMetaData(array:string[], index:number, size:number):void;
	protected _readLittleEndian(array:string[], index:number):number;
	protected _readBigEndian(array:string[], index:number):number;
	protected _readFourCharacters(array:string[], index:number):string;
}
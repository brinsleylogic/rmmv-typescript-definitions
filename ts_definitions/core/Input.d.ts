//-----------------------------------------------------------------------------
// Input
//
// The static class that handles input data from the keyboard and gamepads.
declare class Input
{
	public static keyRepeatWait:number;
	public static keyRepeatInterval:number;
	public static keyMapper:{ [key:number]: string };
	public static gamepadMapper:{[key:number]: string };
	
	protected static _currentState:{[key:number]: boolean };
	protected static _previousState:{[key:number]: boolean };
	protected static _gamepadStates:{[key:number]: boolean }[];
	protected static _latestButton:string;
	protected static _pressedTime:number;
	protected static _dir4:number;
	protected static _dir8:number;
	protected static _preferredAxis:string;
	protected static _date:Date;
	
	public static clear():void;
	public static update():void;
	public static isPressed(keyName:string):boolean;
	public static isTriggered(keyName:string):boolean;
	public static isRepeated(keyName:string):boolean;
	public static isLongPressed(keyName:string):boolean;
	
	protected static _wrapNwjsAlert():void;
	protected static _setupEventHandlers():void;
	protected static _onKeyDown(event:Event):void;
	protected static _shouldPreventDefault(keyCode:number):boolean;
	protected static _onKeyUp(event:Event):void;
	protected static _onFocusLost():void;
	protected static _pollGamepads():void;
	protected static _updateGamepadState(gamepad:Gamepad):void;
	protected static _updateDirection():void;
	protected static _signX():number;
	protected static _signY():number;
	protected static _makeNumpadDirection(x:number, y:number):number;
	protected static _isEscapeCompatible(keyName:string):boolean;
}
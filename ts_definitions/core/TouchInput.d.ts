//-----------------------------------------------------------------------------
// TouchInput
//
//  The static class that handles input data from the mouse and touchscreen.
declare class TouchInput
{
	public static wheelX:number;
	public static wheelY:number;
	public static x:number;
	public static y:number;
	public static date:Date;
	
	protected static _mousePressed:boolean;
	protected static _screenPressed:boolean;
	protected static _pressedTime:number;
	protected static _triggered:boolean;
	protected static _cancelled:boolean;
	protected static _moved:boolean;
	protected static _released:boolean;
	protected static _wheelX:number;
	protected static _wheelY:number;
	protected static _x:number;
	protected static _y:number;
	protected static _date:Date;
	protected static _events:{
		triggered:boolean; cancelled:boolean; moved:boolean;
		released:boolean; wheelX:number; wheelY:number;
	};
	
	public static update():void;
	public static isPressed():boolean;
	public static isTriggered():boolean;
	public static isRepeated():boolean;
	public static isLongPressed():boolean;
	public static isCancelled():boolean;
	public static isMoved():boolean;
	public static isReleased():boolean;
	
	protected static _setupEventHandlers():void;
	protected static _onMouseDown(event:Event):void;
	protected static _onLeftButtonDown(event:Event):void;
	protected static _onMiddleButtonDown(event:Event):void;
	protected static _onMouseMove(event:Event):void;
	protected static _onMouseUp(event:Event):void;
	protected static _onWheel(event:Event):void;
	protected static _onTouchStart(event:Event):void;
	protected static _onTouchMove(event:Event):void;
	protected static _onTouchEnd(event:Event):void;
	protected static _onTouchCancel(event:Event):void;
	protected static _onPointerDown(event:Event):void;
	protected static _onTrigger(x:number, y:number):void;
	protected static _oncancel(x:number, y:number):void;
	protected static _onMove(x:number, y:number):void;
	protected static _onRelease(x:number, y:number):void;
}
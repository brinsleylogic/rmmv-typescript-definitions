//-----------------------------------------------------------------------------
// Window_Selectable
//
// The window class with cursor movement and scroll functions.

declare class Window_Selectable extends Window_Base
{
	protected _index:number;
	protected _cursorFixed:boolean;
	protected _cursorAll:boolean;
	protected _stayCount:number;
	protected _helpWindow:Window_Help;
	protected _handlers:{ [symbol:string]: Function };
	protected _touching:boolean;
	protected _scrollX:number;
	protected _scrollY:number;
	
	public constructor(x:number, y:number, width:number, height:number);

	public index():number;
	public cursorFixed():boolean;
	public setCursorFixed():void;
	public cursorAll():boolean;
	public setCursorAll():void;
	public maxCols():number;
	public maxItems():number;
	public spacing():number;
	public itemWidth():number;
	public itemHeight():number;
	public maxRows():number;
	
	public select(index:number):void;
	public deselect():void;
	public reselect():void;

	public row():number;
	public topRow():number;
	public maxTopRow():number;
	public setTopRow(row:number):void;

	public resetScroll():void;
	public maxPageRows():number;
	public maxPageItems():number;

	public setBottomRow(row:number):void;

	public topIndex():number;

	public itemRect(index:number):Rect;
	public itemRectForText(index:number):Rect;

	public setHelpWindow(helpWindow:Window_Help):void;
	public showHelpWindow():void;
	public hideHelpWindow():void;

	public setHandler(symbol:string, method:Function):void;
	public isHandled(symbol:string):boolean;
	public callHandler(symbol:string):void;

	public isOpenAndActive():boolean;
	public isCursorMovable():boolean;

	public cursorDown(wrap:boolean):void;
	public cursorUp(wrap:boolean):void;
	public cursorRight(wrap:boolean):void;
	public cursorLeft(wrap:boolean):void;
	public cursorPagedown():void;
	public cursorPageup():void;

	public scrollDown():void;
	public scrollUp():void;
	
	public updateArrows():void;
	public processCursorMove():void;
	public processHandling():void;
	public processWheel():void;
	public processTouch():void;

	public isTouchedInsideFrame():boolean;
	public onTouch():void;

	public hitTest(x:number, y:number):number;

	public isContentsArea(x:number, y:number):boolean;
	public isTouchOkEnabled():boolean;
	public isOkEnabled():boolean;
	public isCancelEnabled():boolean;
	public isOkTriggered():boolean;
	public isCancelTriggered():boolean;
	
	public processOk():void;

	public playOkSound():void;
	public playBuzzerSound():void;

	public callOkHandler():void;
	public processCancel():void;
	public callCancelHandler():void;

	public processPageup():void;
	public processPagedown():void;

	public updateInputData():void;
	public updateCursor():void;

	public isCursorVisible():boolean;
	public ensureCursorVisible():void;

	public callUpdateHelp():void;
	public updateHelp():void;
	public setHelpWindowItem(item:any):void;

	public isCurrentItemEnabled():boolean;

	public drawAllItems():void;
	public drawItem(index:number):void;
	public clearItem(index:number):void;
	public redrawItem(index:number):void;
	public redrawCurrentItem():void;

	public refresh():void;
}
//-----------------------------------------------------------------------------
// Window_NameEdit
//
// The window for editing an actor's name on the name input screen.

declare class Window_NameEdit extends Window_Base
{
	protected _actor:Game_Actor;
	protected _name:string;
	protected _index:number;
	protected _maxLength:number;
	protected _defaultName:string;

	public constructor(actor:Game_Actor, maxLength:number);

	public windowWidth():number;
	public windowHeight():number;

	public name():string;

	public restoreDefault():boolean;

	public add(ch:string):boolean;
	public back():boolean;

	public faceWidth():number;
	public charWidth():number;

	public left():number;

	public itemRect(index:number):Rect;
	public underlineRect(index:number):Rect;

	public underlineColor():string;
	public drawUnderline(index:number):void;

	public drawChar(index:number):void;
}
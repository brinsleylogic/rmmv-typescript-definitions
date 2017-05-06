//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.

declare class Window_Base extends Window
{
	protected static readonly _iconWidth:number;
	protected static readonly _iconHeight:number;
	protected static readonly _faceWidth:number;
	protected static readonly _faceHeight:number;

    protected _opening:boolean;
    protected _closing:boolean;
    protected _dimmerSprite:Sprite;

	public constructor(x:number, y:number, width:number, height:number);

	public lineHeight():number;

	public standardFontFace():string;
	public standardFontSize():number;

	public standardPadding():number;
	public textPadding():number;

	public standardBackOpacity():number;
	public loadWindowskin():void;

	public updatePadding():void;
	public updateBackOpacity():void;

	public contentsWidth():number;
	public contentsHeight():number;
	public fittingHeight(numLines:number):number;

	public updateTone():void;

	public createContents():void;

	public resetFontSettings():void;

	public resetTextColor():void;

	public updateOpen():void;
	public updateClose():void;

	public open():void;
	public close():void;

	public isOpening():boolean;
	public isClosing():boolean;

	public show():void;
	public hide():void;

	public activate():void;
	public deactivate():void;

	public textColor(n:number):string;
	public normalColor():string;
	public systemColor():string;
	public crisisColor():string;
	public deathColor():string;
	public gaugeBackColor():string;
	public hpGaugeColor1():string;
	public hpGaugeColor2():string;
	public mpGaugeColor1():string;
	public mpGaugeColor2():string;
	public mpCostColor():string;
	public powerUpColor():string;
	public powerDownColor():string;
	public tpGaugeColor1():string;
	public tpGaugeColor2():string;
	public tpCostColor():string;
	public pendingColor():string;

	public translucentOpacity():number;

	public changeTextColor(color:string):void;
	public changePaintOpacity(enabled:boolean):void;

	public drawText(text:string, x:number, y:number, maxWidth:number, align:string):void;
	public textWidth(text:string):number;
	public drawTextEx(text:string, x:number, y:number):number;
	public convertEscapeCharacters(text:string):string;

	public actorName(n:number):string;
	public partyMemberName(n:number):string;

	public processCharacter(textState:TextState):void;
	public processNormalCharacter(textState:TextState):void;
	public processNewLine(textState:TextState):void;
	public processNewPage(textState:TextState):void;

	public obtainEscapeCode(textState:TextState):string;
	public obtainEscapeParam(textState:TextState):string;
	public processEscapeCharacter(code:string, textState:TextState):void;

	public processDrawIcon(iconIndex:number, textState:TextState):void;

	public makeFontBigger():void;
	public makeFontSmaller():void;

	public calcTextHeight(textState:TextState, all:boolean):number;

	public drawIcon(iconIndex:number, x:number, y:number):void;
	public drawFace(faceName:string, faceIndex:number, x:number, y:number, width:number, height:number):void;
	public drawCharacter(characterName:string, characterIndex:number, x:number, y:number):void;
	public drawGauge(x:number, y:number, width:number, rate:number, color1:string, color2:string):void;

	public hpColor(actor:Game_Actor):string;
	public mpColor(actor:Game_Actor):string;
	public tpColor(actor:Game_Actor):string;

	public drawActorCharacter(actor:Game_Actor, x:number, y:number):void;
	public drawActorFace(actor:Game_Actor, x:number, y:number, width:number, height:number):void;
	public drawActorName(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawActorClass(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawActorNickname(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawActorLevel(actor:Game_Actor, x:number, y:number):void;
	public drawActorIcons(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawCurrentAndMax(current:number, max:number, x:number, y:number, width:number, color1:string, color2:string):void;
	public drawActorHp(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawActorMp(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawActorTp(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawActorSimpleStatus(actor:Game_Actor, x:number, y:number, width:number):void;
	public drawItemName(item:RPG_ItemBase, x:number, y:number, width:number):void;
	public drawCurrencyValue(value:number, unit:string, x:number, y:number, width:number):void;

	public paramchangeTextColor(change:number):string;

	public setBackgroundType(type:MessageBackgroundStyle):void;

	public showBackgroundDimmer():void;
	public hideBackgroundDimmer():void;
	public updateBackgroundDimmer():void;
	public refreshDimmerBitmap():void;

	public dimColor1():string;
	public dimColor2():string;

	public canvasToLocalX(x:number):number;
	public canvasToLocalY(y:number):number;
}
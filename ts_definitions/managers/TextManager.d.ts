//-----------------------------------------------------------------------------
// TextManager
//
// The public static class that handles terms and messages.
declare class TextManager
{
	public static currencyUnit:string;
	public static level:string;
	public static levelA:string;
	public static hp:string;
	public static hpA:string;
	public static mp:string;
	public static mpA:string;
	public static tp:string;
	public static tpA:string;
	public static exp:string;
	public static expA:string;
	public static fight:string;
	public static escape:string;
	public static attack:string;
	public static guard:string;
	public static item:string;
	public static skill:string;
	public static equip:string;
	public static status:string;
	public static formation:string;
	public static save:string;
	public static gameEnd:string;
	public static options:string;
	public static weapon:string;
	public static armor:string;
	public static keyItem:string;
	public static equip2:string;
	public static optimize:string;
	public static clear:string;
	public static newGame:string;
	public static continue_:string;
	public static toTitle:string;
	public static cancel:string;
	public static buy:string;
	public static sell:string;
	public static alwaysDash:string;
	public static commandRemember:string;
	public static bgmVolume:string;
	public static bgsVolume:string;
	public static meVolume:string;
	public static seVolume:string;
	public static possession:string;
	public static expTotal:string;
	public static expNext:string;
	public static saveMessage:string;
	public static loadMessage:string;
	public static file:string;
	public static partyName:string;
	public static emerge:string;
	public static preemptive:string;
	public static surprise:string;
	public static escapeStart:string;
	public static escapeFailure:string;
	public static victory:string;
	public static defeat:string;
	public static obtainExp:string;
	public static obtainGold:string;
	public static obtainItem:string;
	public static levelUp:string;
	public static obtainSkill:string;
	public static useItem:string;
	public static criticalToEnemy:string;
	public static criticalToActor:string;
	public static actorDamage:string;
	public static actorRecovery:string;
	public static actorGain:string;
	public static actorLoss:string;
	public static actor:string;
	public static Drain:string;
	public static actorNoDamage:string;
	public static actorNoHit:string;
	public static enemyDamage:string;
	public static enemyRecovery:string;
	public static enemyGain:string;
	public static enemyLoss:string;
	public static enemyDrain:string;
	public static enemyNoDamage:string;
	public static enemyNoHit:string;
	public static evasion:string;
	public static magicEvasion:string;
	public static magicReflection:string;
	public static counterAttack:string;
	public static substitute:string;
	public static buffAdd:string;
	public static debuffAdd:string;
	public static buffRemove:string;
	public static actionFailure:string;
	
	public static basic(basicId:number):string;
	public static param(paramId:number):string;
	public static command(commandId:number):string;
	public static message(messageId:string):string;
	public static getter(method:string, param:string|number):string;
	
}
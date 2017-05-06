//-----------------------------------------------------------------------------
// Game_Follower
//
// The game object class for a follower. A follower is an allied character,
// other than the front character, displayed in the party.

declare class Game_Follower extends Game_Character
{
	protected _memberIndex:number;

	public constructor(memberIndex:number);

	public refresh():void;

	public actor():Game_Actor;

	public isVisible():boolean;

	public chaseCharacter(character:Game_Character):void;
}
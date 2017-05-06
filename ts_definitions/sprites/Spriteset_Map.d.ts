//-----------------------------------------------------------------------------
// Spriteset_Map
//
// The set of sprites on the map screen.

declare class Spriteset_Map extends Spriteset_Base
{
	public hideCharacters():void;

	public loadTileset():void;

	public createParallax():void;
	public createTilemap():void;
	public createCharacters():void;
	public createShadow():void;
	public createDestination():void;
	public createWeather():void;

	public updateTileset():void;
	public updateParallax():void;
	public updateTilemap():void;
	public updateShadow():void;
	public updateWeather():void;

	/*
	* Simple fix for canvas parallax issue, destroy old parallax and readd to  the tree.
	*/
	protected _canvasReAddParallax():void;
}
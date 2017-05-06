interface CommandData
{
	name:string;
	symbol:string;
	enabled:boolean;
	ext:any;
}

interface Rect
{
	x:number;
	y:number;
	width:number;
	height:number;
}

interface TextState
{
	index:number;
	text:string;
	left:number;
	height:number;
	x:number;
	y:number;
}
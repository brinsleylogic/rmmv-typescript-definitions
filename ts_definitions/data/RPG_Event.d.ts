interface DataCommonEvent
{
	id:number;
	list:EventItem[];
	name:string;
	switchId:number;
	trigger:number;
}

interface EventItem
{
    code:number;
    indent:number;
    parameters:number[];
}
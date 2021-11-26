import { Application, Request, Response } from "express";

export default class Routes {
	constructor(app:Application) {
		app.get('/',(req:Request,res:Response):void=>{
			res.json({name:"deep"})
		})
	}
}
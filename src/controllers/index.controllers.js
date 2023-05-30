import {Sql} from "../database/sql.js";

export const List = async (req, res) => {
    const [data] = await Sql.query('select id,name,url from protitute;');
    res.json(data);
}
export const Consult = async (req, res) => {
    const [data] = await Sql.query('select * from protitute where id = ?',[req.params.id]);
    res.json(data);
}
export const Counter = async (req, res) =>{
    const [data] = await Sql.query('select count(*) from protitute;');
    res.json(data);
}
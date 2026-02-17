import { createPool} from "mysql2/promise";

const conn = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_product",

})

export default conn
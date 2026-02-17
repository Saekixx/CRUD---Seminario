import conn from "../conection.js"

export const listar_producto = async (req, res) => {  
    try {
        const [result] = await conn.query("CALL listar_productos")
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const crear_producto = async (req, res) => {
    const { name, description, stock } = req.body

    try {
        const [result] = await conn.query("CALL insertar_producto(?,?,?)", [name,description,stock])
        res.json({message:"Se creo el producto correctamente"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const actualizar_producto = async (req, res) => {
    const { id } = req.params
    const { name, description, stock } = req.body

    try {
        const [result] = await conn.query("CALL editar_producto(?,?,?,?)",[id,name,description,stock])
        res.json({message:"Se actualizo el producto correctamente"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const eliminar_prodcuto = async (req, res) => {
    const { id } = req.params
    try {
        const [result] = await conn.query("CALL eliminar_producto(?)",[id])
        res.json({message:"Se elimino el producto correctamente"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const ensureDataIsValid = (req, res, next) =>{
    const {title, done} = req.body
    
    if(typeof title !== 'string'){
        return res.status(400).json("Apenas o tipo string aceito no campo title!")
    }


    if(req.method == 'PATCH'){
        if(typeof(done) !== 'boolean'){
            return res.status(400).json("Apenas o tipo boolean aceito para Done!")
        }
    }
    return next()
}
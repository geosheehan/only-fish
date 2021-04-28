// exporting getIndex
module.exports = {
    getIndex: (req,res)=>{
      // telling response to renders index ejs
        res.render('index.ejs')
    }
}
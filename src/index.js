import express from 'express';

//espress
const app = express();
//puerto
app.set('port', process.env.PORT || 4000 );

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto'+ app.get('port'));
})

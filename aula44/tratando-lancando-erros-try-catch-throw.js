
// try{
//     console.log(naoExisto);
// } catch (err){
//     console.log('naoExisto não existe');
//     console.log(err);
// }


function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números');
    }
    return x + y;
};

try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
    //* é executada quand não há erros
} catch(error){
    // console.log(error);
    //* é executada quando há erros
}
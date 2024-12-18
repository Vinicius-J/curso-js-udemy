// try{ //* é executado com não há erros
//     console.log(a); //! error
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
    
// } catch (e){ //* é executado quando há erros
//     console.log('Tratando o erro');
    
// } finally{ //* sempre é executado
//     console.log('FINALLY: Eu sempre sou executado');
// }


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    } 
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e){
    // Tratar error
    console.log(e);
} finally{
    console.log('Tenha uma bom dia!'); 
}
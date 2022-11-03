import './PaginaDeLogin.css'
 
const PaginaDeLogin = () =>{
    return(
        <div className='pagina'>
            <div className='p-coluna'>
                <div>
                    <h1>IMPULSIONE</h1>
                </div>

                <div>
                    <h2>Desenvolver pessoas <br/>Impulsionar negócios <br/>Conectar pessoas</h2>
                </div>

                <div className='botoes'>
                    <button className='bt1'><nobr>ENTRAR NA MINHA CONTA</nobr></button>
                    <button className='bt2'><nobr>ME CADASTRAR COMO PF</nobr></button>
                    <button className='bt3'><nobr>CADASTRAR MEU NEGÓCIO</nobr></button>
                </div>

            </div>


            <div className='s-coluna'>
                <div >
                <h3><nobr>PESSOAL   </nobr>  </h3> <h4><nobr> ENDEREÇO  </nobr>  </h4> <h5><nobr> CADASTRO   </nobr>  </h5>
                

                

                </div>

            </div>


        </div>
     

    ) 
}
export default PaginaDeLogin;
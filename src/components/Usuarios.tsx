
import { Usuario } from '../interfaces/reqRes.interface';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const {usuarios, cargarUsuarios, paginaAnterior, paginaSiguiente} = useUsuarios();
    
    const renderItem = ({first_name, last_name, id, email, avatar}: Usuario) =>{
        return (
            <tr key={id.toString()}>
                 <td>
                    <img 
                        src={avatar} 
                        alt={first_name}
                        style={{
                            width: 50,
                            borderRadius:100
                        }}/>
                </td>
                 <td>{first_name} {last_name}</td>
                 <td>{email}</td>
            </tr>
        )
    }

  return (
    <>
        <h3>Peticiones HTTP - Axios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => renderItem(usuario))}
            </tbody>
        </table>
        <button 
            className='btn btn-primary'
            onClick={paginaAnterior}>Anterior</button>
            &nbsp;
        <button 
            className='btn btn-primary'
            onClick={paginaSiguiente}>Siguiente</button>
    </>
  )
}

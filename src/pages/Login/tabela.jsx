import React, {useState, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Edit from './edit';
import Login from '.';




export default function Tabela() {

  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    try{
      await axios.get("http://localhost:8082/api/usuario").then((response) => {
        setUsuarios(response.data)
      })
    } catch (erro) {
      alert(erro.message);
    }
  };


  useEffect(() => {
    listarUsuarios();
  }, [])

  const {id} = useParams();
  const deleteUsuario = async (id) => {
    try{
      await axios.delete(`http://localhost:8082/api/usuario/${id}`)
      .then((response) => {
        alert('Usuário excluído!')
        listarUsuarios();
      })
    }catch (erro){
      alert(erro.message)
    }
  }


  return (
    
    <div className="container home">
        <div className="py-4">
        <table className="table table-striped border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Idade</th>
      <th scope="col">Email</th>
      <th scope="col">-</th>
    </tr>
  </thead>
  <tbody>
    {usuarios.map((usuario, key) => (
      <tr>
        <th scope="row" key={key}>{key +1}</th>
        <td>{usuario.nome}</td>
        <td>{usuario.idade}</td>
        <td>{usuario.email}</td>
        <td>
          <Link to={`/view/${usuario.id}`} className="btn btn-outline-success mx-2">
            Ver
          </Link>
          <Link to={"/login"} className="btn btn-outline-info mx-2">
            Adicionar
          </Link>
          <Link to={`/edit/${usuario.id}`} className="btn btn-warn>ing mx-2">
            Editar
          </Link>
          <button className="btn btn-danger mx-2" onClick={() => deleteUsuario(usuario.id)}>
            Excluir
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>

    </div>
  )
}
import './UserCard.css'
import iconoLinkedIn from '../assets/linkedin.png'
function UserCard(props) {
  return (
    <div className='tarjeta'>
        <img src={props.imagen} alt="Foto Perfil" className='tarjeta-img' />
        <div className='tarjeta-info'>
            <h3>{props.nombre}</h3>
            <p className='profesion'>
                {props.profesion}
                <img src={iconoLinkedIn} alt="logo Linkedin" className='icono-red-social' />
            </p>
            <button className='btn-conectar'>Conectar</button>

        </div>
    </div>
  )
}

export default UserCard
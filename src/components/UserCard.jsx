// 1. Importamos la imagen desde la ruta relativa correcta
import logoLinkedin from '../assets/linkedin.png';
function UserCard(props) {
  return(
  //Magia Tailwin
  <div className="bg-white w-64 rounded-xl shadow-lg overflow-hidden hover:shadow-2x1
  hover:-translate-y-2 transition-all duration-300 dark:bg-gray-800 grayscale hover:grayscale-0">
    <img 
    src={props.imagen} 
    alt="Foto de Perfil" 
    className="w-full h-48 object-cover"/>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{props.nombre}</h3>

      <p className="text-sm text-gray-500 my-3 flex items-center justify-center gap-2 dark:text-gray-400">
        {props.profesion}
        <img src={logoLinkedin} alt="LinkedIn" className="w-5 h-5 object-contain" />
      </p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-full 
      font-bold hover:bg-blue-700 transition-color">
        Conectar
      </button>
    </div>
  </div>
  )
}
export default UserCard;
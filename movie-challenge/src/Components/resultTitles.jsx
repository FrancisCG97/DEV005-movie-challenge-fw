// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from 'react-router-dom';

// TÍTULO EN INPUT DE RESULTADO DE BÚSQUEDA
const ResultTitles = () => {
    // JS
    
    // FUNCIONALIDAD BOTÓN VOLVER
    const navigate = useNavigate();
    const back = () => {
      navigate('/home');
    }

    return (

        <>
        {/* html */}
            <div className="container-l">
                <div className="input-group mb-3">
                    <div className="row row-cols-auto">
                        <div className='row-col'>
                        <input className="form-control" type="text" value="Título de búsqueda ingresado" aria-label="readonly input example" readOnly></input>
                        </div>
                        <div className='row-col'>
                            <button onClick={back} className="btn btn-outline-secondary" type="button" id="button-addon2"> Volver </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ResultTitles;
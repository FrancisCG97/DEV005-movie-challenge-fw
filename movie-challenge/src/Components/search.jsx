// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Search = () => {
    // JS

    return (
        <>
            {/* html */}
            <div className="container-sm">
                <div className="input-group mb-3">
                    <div className="row row-cols-auto">
                        <div className='row-col'>
                            <input type="text" className="form-control" placeholder="¿Qué película buscas?" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        </div>
                        <div className='row-col'>
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2"> Buscar </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search;
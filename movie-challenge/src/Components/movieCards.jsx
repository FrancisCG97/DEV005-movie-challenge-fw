// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const MovieCards = () => {
    //JS
    console.log('movieCards funciona');

    return (
        <>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-xl-8">
                        <img src="..." className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-xl-8">
                        <div className="card-body">
                            <h5 className="card-title"> Título </h5>
                            <p className="card-text"> Info básica de la película </p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MovieCards;
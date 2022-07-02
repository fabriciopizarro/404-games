import '../styles/css/Confirm.css';
import {
    Link
} from 'react-router-dom';
// import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
// import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

const Confirm = () => {
    return (
        <>
            <body class="body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mx-auto mt-5">
                            <div class="confirmacion">
                                <div class="confirmacion_header">
                                    <div class="check"><i class="fa fa-gamepad" aria-hidden="true"></i></div>
                                </div>
                                <div class="contenido">
                                    <h1 className="contenido-h1">Felicitaciones! haz comprado: <br></br> God of War </h1>
                                    <h2 className="contenido-h2">Key Product:</h2>
                                    <p className="contenido-p">7B8HU-YGTFV-54WA4-ESXD5-FR6TF</p>
                                    <Link className="contenido-a" to="/home">Ir al inicio</Link>
                                </div>
                                Link
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Confirm;
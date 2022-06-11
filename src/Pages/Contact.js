import React from 'react';

export const Contact = () =>{    
    return(
        <div style={{padding:"7.5px 300px", backgroundColor: "lightgray"}}>
        <form>
        <div style={{padding: "70px 150px", color: "black"}}>
            <h3>Encuentranos en nuestra ubicación</h3>
        <iframe src="https://embed.waze.com/es/iframe?zoom=16&lat=12.141947&lon=-86.203418&ct=livemap" width="500" height="350" allowfullscreen></iframe>
        </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">*Usuario</label>
                <input type="text" className="form-control" id="exampleInputPassword1" required/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">*Correo Electronico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">*Mensaje</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                
            </div>
            <div className="custom-file">
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div className="mb-3 form-check">
                <br></br>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                <label className="form-check-label" for="exampleCheck1">Aceptar terminos y condiciones</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}
import React from 'react';

export const Contact = () =>{    
    return(
        <div style={{padding:"7.5px 300px"}}>
        <form>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputPassword1" required/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                
            </div>
            <div className="custom-file">
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div className="mb-3 form-check">
                <br></br>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                <label className="form-check-label" for="exampleCheck1">Acepto que aprobe la clase</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}
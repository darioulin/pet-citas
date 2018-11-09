import React, { Component } from "react";

class AgregarCita extends Component {
  state = {};
  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            {" "}
            Agregar las Citas Aquí{" "}
          </h2>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input type="date" className="form-control" />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntoma
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea className="form-control" />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-111">
                  Agregar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AgregarCita;

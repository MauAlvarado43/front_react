import React from "react"
import { Formik, Field, Form } from "formik"

function FormTask({ users = [], projects = [], onSubmit, error }) {

  return <div className="card">

    <div className="card-header">
      <h3 className="card-header-title">NUEVA TAREA</h3>
    </div>

    <div className="card-body">
      <div className="row">
        <div className="col">
          <Formik initialValues={{"status": "TODO"}} onSubmit={onSubmit}>
            <Form>

              <div className="form-group">
                <label class="input-label">Nombre</label>
                <Field type="text" name="name" className="form-control" placeholder="Nombre"/>
              </div>

              <div className="form-group">
                <label class="input-label">Proyecto</label>
                  <Field component="select" name="project.id" className="form-control"  >
                    <option value="">Seleccione</option>
                    {projects.map(e => <option key={e["id"]} value={e["id"]}>{e["name"]}</option>)}
                  </Field>
              </div>

              <div className="form-group">
                <label class="input-label">Asignar a</label>
                  <Field component="select" name="assigned.id" className="form-control"  >
                    <option value="">Seleccione</option>
                    { users.map(e=> <option key={e["id"]} value={e["id"]}>{e["email"]}</option>) }
                  </Field>
              </div>

              <div className="form-group">
                <label class="input-label">Deadline</label>
                <Field type="date" name="deadline" className="form-control" />
              </div>

              { error ? <div className="alert alert-soft-danger">{error}</div> : null }

              <button type="submit" className="btn btn-primary btn-block">Guardar</button>

            </Form>
          </Formik>
        </div>
      </div>
    </div>

  </div>

}

FormTask.propTypes = {}

export default FormTask
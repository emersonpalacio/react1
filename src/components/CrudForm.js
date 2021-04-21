import React, { useState, useEffect } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialForm = {
  id: null,
  User: "",
  CreateDate: "",
  UpdateDate: "",
  State: "",
};

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  el,
}) {
  const [form, setForm] = useState(initialForm);
  const [selectDate, setSelectDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.User || !form.CreateDate || !form.UpdateDate || !form.State) {
      alert("datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="div-form-container">
      <h1>{dataToEdit ? "Editando Registros" : "Agregar Registros"}</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="submit"
            value="Enviar"
            onClick={() => window.location.reload(true)}
          />
          <input
            type="reset"
            value="Limpiar"
            onClick={(handleReset, () => window.location.reload(true))}
          />

          <input
            onChange={handleChange}
            value={form.User}
            type="text"
            name="User"
            placeholder="User"
            id="apellido"
          />
          {/* "location.reload()"   (date) => setSelectDate(date)  Datepicker    selected={selectDate}*/}

          <Datepicker
            selected={selectDate}
            onChange={(handleChange, (date) => setSelectDate(date))}
            placeholderText="Create Date"
            value={(form.CreateDate = selectDate)}
            type="text"
            name="CreateDate"
            popperPlacement="top-end"
            //placeholder="CreateDate"
          />

          <Datepicker
            selected={startDate}
            onChange={(handleChange, (date) => setStartDate(date))}
            value={(form.UpdateDate = startDate)}
            placeholderText="Update Date"
            type="text"
            name="UpdateDate"
            //placeholder="Update Date"
            id="nombre"
            popperPlacement="top-end"
          />

          <input
            onChange={handleChange}
            value={form.State}
            type="text"
            name="State"
            placeholder="State"
          />
        </form>

        <div className="contact-info">
          <ul>
            <li>sixtandev@gmail.com</li>
            <li>(57)314-895-17-56</li>
            <p> Iam Emmanuel Palacio Gaviria.</p>
            <p>
              I'm a passionate and creative full-stack developer from Colombia
              🧡
            </p>
            <p>I hope some day understand the kernel 🧠</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

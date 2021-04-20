import React, { useState, useEffect } from "react";
import { FaMapMarked, FaEnvelopeOpen, FaPhone } from "react-icons/fa";

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
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpiar" onClick={handleReset} />

          <input
            onChange={handleChange}
            value={form.User}
            type="text"
            name="User"
            placeholder="User"
            id="apellido"
          />

          <input
            onChange={handleChange}
            value={form.CreateDate}
            type="text"
            name="CreateDate"
            placeholder="CreateDate"
          />

          <input
            onChange={handleChange}
            value={form.UpdateDate}
            type="text"
            name="UpdateDate"
            placeholder="Update Date"
            id="nombre"
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
            <li>
              <FaMapMarked />
              sixtandev@gmail.com
            </li>
            <li>(57)314-895-17-56</li>
            <p> Iam Emmanuel Palacio Gaviria.</p>
            <p>
              I'm a passionate and creative full-stack developer from Colombia
              🇨🇴 I am a person who likes to work in a team a lot, I love to
              learn new things every day, I am very passionate about everything
              related to operating systems and low-level. 😍🥰🧡
            </p>
            <p>I hope some day understand the kernel 🧠</p>
            <p>Development full stack</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

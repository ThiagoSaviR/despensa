import React, { useState } from "react";

const FormularioTelefone = () => {
  const [telefones, setTelefones] = useState([""]);

  const adicionarTelefone = () => {
    setTelefones([...telefones, ""]);
  };

  const handleChangeTelefone = (index, event) => {
    const novosTelefones = [...telefones];
    novosTelefones[index] = event.target.value;
    setTelefones(novosTelefones);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar ação com os telefones, como enviar para um servidor
    console.log(telefones);
  };

  return (
    <form onSubmit={handleSubmit}>
      {telefones.map((telefone, index) => (
        <div key={index}>
          <input
            type="tel"
            value={telefone}
            onChange={(event) => handleChangeTelefone(index, event)}
            placeholder="Telefone"
          />
        </div>
      ))}
      <button type="button" onClick={adicionarTelefone}>
        +
      </button>
      <br /><br />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default FormularioTelefone;
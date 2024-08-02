"use client"

import React, { useState } from 'react';

function CadastroMaquinas() {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    modelo: '',
    dataFabricacao: '',
    numeroSerie: '',
    localizacao: '',
    historicoManutencao: '',
    imagens: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para enviar os dados
    console.log(formData);
  };

  return (
    <form className="max-w-xl mx-auto p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Cadastro de Máquinas</h2>
      <input type="text" name="nome" placeholder="Nome" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <input type="text" name="tipo" placeholder="Tipo" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <input type="text" name="modelo" placeholder="Modelo" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <input type="date" name="dataFabricacao" placeholder="Data de Fabricação" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <input type="text" name="numeroSerie" placeholder="Número de Série" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <input type="text" name="localizacao" placeholder="Localização" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <textarea name="historicoManutencao" placeholder="Histórico de Manutenção" className="w-full mb-2 p-2 border" onChange={handleChange}></textarea>
      <input type="file" name="imagens" className="w-full mb-2 p-2" onChange={handleChange} />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold">Cadastrar Máquina</button>
    </form>
  );
}

export default CadastroMaquinas;

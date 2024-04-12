const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
    },
  ];

  function apresentacao(){

    return medicos.map(medico =>{
        let apresentacao;
        
        if(medico.genero === 'masculino')(
            apresentacao = `Dr. ${medico.nome},${medico.sobrenome}`
                    
        )
        if(medico.genero === 'feminino')(
            apresentacao = `Dr(a) ${medico.nome},${medico.sobrenome}`
                    
        )
        if(medico.genero === 'não-binario')(
            apresentacao = `Dr(e) ${medico.nome},${medico.sobrenome}`
                    
        )
        return{
            ...medico,
            apresentacao,
        }
    })
    

    
  }

  console.log(apresentacao());

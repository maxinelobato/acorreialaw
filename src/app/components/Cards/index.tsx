import ButtonMore from '../ButtonMore'

export default function Cards () {
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z'></path>
        </svg>
      ),
      title: 'Contrato de Prestação de Serviços',
      desc: 'Pessoa Física ou Jurídica'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path></svg>
      ),
      title: 'Contratos de Tecnologia (TI)',
      desc: 'Implantação; Fornecimento; Importação; Transferência; Internos; Vendas de Softwares; Licenças de Uso; Cessão'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM136,176H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm64,0H168a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM32,88V64H224V88Z'></path>
        </svg>
      ),
      title: 'Contrato Imobiliário',
      desc: 'Contrato de Compra e Venda; Contrato de Locação Imobiliária; Contrato de Comodato; Contrato de Permuta; Contrato de Aluguel'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256"><path d="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z"></path></svg>
      ),
      title: 'Contrato de Locação Imobiliária',
      desc: 'Contrato Bilateral, Contrato Oneroso, Contrato Cumulativo, Contrato Consensual, Contrato não solene, Contrato de execução periódica'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M220.8,169.6A8,8,0,0,0,216,168h-8V64a32,32,0,0,0-32-32H40A32,32,0,0,0,8,64C8,77.61,18.05,85.54,19.2,86.4h0A7.89,7.89,0,0,0,24,88a8,8,0,0,0,4.87-14.33h0C28.83,73.62,24,69.74,24,64a16,16,0,0,1,32,0V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32C232,178.39,222,170.46,220.8,169.6ZM104,96h64a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Zm-8,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Zm104,72H107.71A31.82,31.82,0,0,0,112,192a26.92,26.92,0,0,0-1.21-8h102a12.58,12.58,0,0,1,3.23,8A16,16,0,0,1,200,208Z'></path>
        </svg>
      ),
      title: 'Termos e Condições',
      desc: 'Notificações, NDA - (Non Disclosure Agreement) ou Acordo de Confidencilidade), Termos de Uso, Política de Cookies, Política de Privacidade de Dados, Política LGPD'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-15.08,15.09-40,40a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm18.24-18.24L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Z'></path>
        </svg>
      ),
      title: 'Propriedade Intectual',
      desc: 'Contrato de Licença de Uso de Marca, Contrato de Exploração de Patente, Contrato de Transferência de Know How, Contrato de Assistência Técnica e Contrato de Franquia.'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z'></path>
        </svg>
      ),
      title: 'Contrato Societário',
      desc: 'Contrato Social; Estatuto Social; Acordo de Sócios; Acordo de Acionistas; Compra e Venda de Quotas Sociais; Compra e Venda de Ações; Contrato de Indenidade e Acordo Operacional'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z'></path>
        </svg>
      ),
      title: 'Contrato de Comodato',
      desc: 'Comodato de imóvel, Comodato de veículo, Comodato de equipamento, Comodato verbal, Comodato oneroso'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z'></path>
        </svg>
      ),
      title: 'Contrato de Permuta',
      desc: 'Contrato Bilateral, Contrato Oneroso, Contrato Cumulativo, Contrato translativo de propriedade'
    }
  ]

  return (
    <>
      <div className='max-w-screen-xl mx-auto mb-6 px-4 py-8 md:px-8'>
        <div className='mx-auto text-center'>
          <div className='space-y-5 max-w-4xl mx-auto text-center px-4 py-8'>
          <h3 className='text-stone-950 font-semibold'>
                Nossos contratos
              </h3>
            <h1 className='text-4xl text-stone-800 font-extrabold mx-auto md:text-5xl'>
              Quais dos contratos pertencem ao <br />{' '}
              <span className='text-stone-400'>seu negócio?</span>
            </h1>
          </div>
        </div>
        <div className='relative mt-12'>
          <ul className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((item, idx) => (
              <li
                key={idx}
                className='bg-black/5 backdrop-blur-lg space-y-3 p-4 border rounded-lg drop-shadow-lg hover:transition-all'
              >
                <a
                  href='https://api.whatsapp.com/send?phone=5511967413625&text=Ol%C3%A1%2C%20Dr.%20Anderson!%20Vim%20pelo%20site%20e%20Preciso%20de%20um%20Contrato.%20Podemos%20conversar%3F%20'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='group/item'
                >
                  <div className='flex items-center justify-between'>
                    <div className='text-stone-950 pb-3'>{item.icon}</div>
                    <div className='group/edit invisible group-hover/item:visible'>
                      <ButtonMore />
                    </div>
                  </div>
                  <h4 className='text-lg text-stone-800 font-semibold'>
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

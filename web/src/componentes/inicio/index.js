import React, { useState } from 'react'

import {Link} from 'react-router-dom'

function Inicio() {
  
  return (

    <div>     

      <h2>PRODUTOS MAIS VENDIDOS</h2>
      <br />

      <div className='Processador'>
        <img src="https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-3-3200g-36ghz-40ghz-turbo-4-core-4-thread-cooler-wraith-stealth-am4_76128.jpg" width='190px' height='170px' alt='logo' />
        <p>Processador AMD Ryzen 3<br /> 3200G Cache 4MB, 3.6GHz<br /> (4GHz Max Turbo) AM4</p>
        <p>R$ 639,90</p>
        <Link to='/formulario'>COMPRAR PRODUTO</Link>
      </div>

      <div className='PlacaDeVideo'>
        <img src="https://images8.kabum.com.br/produtos/fotos/88748/88748_index_gg.jpg" width='190px' height='170px' alt='logo' />
        <p>Placa de Vídeo VGA Gigabyte<br /> AMD Radeon RX 570<br /> 4GB Gaming GDDR5</p>
        <p>R$ 689,90</p>
        <Link to='/formulario'>COMPRAR PRODUTO</Link>

      </div>

      <div className='PlacaMae'>

        <img src="https://images5.kabum.com.br/produtos/fotos/101715/101715_1560177847_index_gg.jpg" width='190px' height='170px' alt='logo' />
        <p>Placa-Mãe Gigabyte<br />  GA-AB350M- DS3H V2,<br /> AMD AM4, mATX, DDR4</p>
        <p>R$ 569,90</p>
        <Link to='/formulario'>COMPRAR PRODUTO</Link>

      </div>

      <div className='Memoria'>

        <img src="https://images8.kabum.com.br/produtos/fotos/110878/memoria-corsair-vengeance-lpx-8gb-3000mhz-ddr4-c16-black-cmk8gx4m1d3000c16_1590146420_gg.jpg" width='200px' height='190px' alt='logo' />
        <p>Memória Corsair Vengeance LPX<br /> 8GB 3000Mhz DDR4</p>
        <p>R$ 374,90</p>
        <Link to='/formulario'>COMPRAR PRODUTO</Link>

      </div>
    </div>
  )
}

export default Inicio
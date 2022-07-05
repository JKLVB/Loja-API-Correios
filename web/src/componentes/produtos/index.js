import React from 'react'
import {Link} from 'react-router-dom'

function Produtos() {
    return (
        <div className='items'>
            <hr/>
            <div className='title' >
                <h2>PROCESSADORES</h2>
            </div>
            <hr/>

            <div className='card'>
                <img src="https://a-static.mlcdn.com.br/618x463/processador-amd-ryzen-5-1600-cache-19mb-3-2ghz-3-6ghz-max-turbo-am4/eniflerinfo/2bcfe548602e11ec80504201ac18503a/4e7e3a77f87be4af97dad304a9086f0d.jpg" alt='logo' />
                <p>Processador AMD Ryzen 5<br /> 1600AF Cache 19MB, 3.2GHz<br/> (3.6GHz Max Turbo), AM4</p>
                <p>R$ 619,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images-submarino.b2w.io/produtos/01/00/img/1514956/2/1514956296_1GG.jpg" alt='logo' />
                <p>Processador AMD Ryzen 7<br /> 2700 Cache 20MB, 3.2GHz<br/> (4.1GHz Max Turbo), AM4</p>
                <p>R$ 1.199,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3g1GIs2682t8T27rBLMXg5kPQfeG8klAzJJr38IqMZ275350KixNTWTXS7DycCBU6ldEfujptTQZJQqnX704-XIpymRrBXq8xa897ZiSSmHuiAUCTirkXlA&usqp=CAE" alt='logo' />
                <p>Processador AMD Ryzen 3<br /> 3200G Cache 4MB, 3.6GHz<br /> (4GHz Max Turbo) AM4</p>
                <p>R$ 639,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>


            <div className='card'>
                <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/y/d/yd360xbbafbox651622.jpg" alt='logo' />
                <p>Processador AMD Ryzen 5<br/> 3600X Cache 32MB 3.8GHz<br/> (4.4GHz Max Turbo) AM4</p>
                <p>R$ 1.399,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>
            
            <hr />
            <div className='title'>
                <h2>PLACAS DE VÍDEO</h2>
            </div>
            <hr />

            <div className='card'>
                <img src="https://images7.kabum.com.br/produtos/fotos/84137/84137_index_gg.jpg" alt='logo' />
                <p>Placa de Vídeo Gigabyte<br /> NVIDIA GeForce GTX<br/> 1050 Ti OC 4G, GDDR5</p>
                <p>R$ 969,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images8.kabum.com.br/produtos/fotos/88748/88748_index_gg.jpg" alt='logo' />
                <p>Placa de Vídeo VGA Gigabyte<br /> AMD Radeon RX 570<br/> 4GB Gaming GDDR5</p>
                <p>R$ 689,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images6.kabum.com.br/produtos/fotos/100986/100986_1553804437_index_gg.jpg" alt='logo' />
                <p>Placa de Vídeo Asus NVIDIA<br /> GeForce GTX 1660 Ti<br/> OC Dual 6GB, GDDR6</p>
                <p>R$ 1.699,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images0.kabum.com.br/produtos/fotos/90140/90140_index_gg.jpg" alt='logo' />
                <p>Placa de Vídeo Asus AMD<br /> Radeon RX 580 OC<br/> 8GB, GDDR5</p>
                <p>R$ 1.199,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <hr />
            <div className='title'>
                <h2>PLACAS-MÃES</h2>
            </div>
            <hr />

            <div className='card'>
                <img src="https://images7.kabum.com.br/produtos/fotos/94927/94927_1519042534_index_gg.jpg" width='190px' height='170px' alt='logo' />
                <p>Placa-Mãe ASRock A320M-HD<br /> AMD AM4, mATX, DDR4</p>
                <p>R$ 499,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images5.kabum.com.br/produtos/fotos/101715/101715_1560177847_index_gg.jpg" width='190px' height='170px' alt='logo' />
                <p>Placa-Mãe Gigabyte AB350M<br /> AMD AM4, mATX, DDR4</p>
                <p>R$ 569,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images7.kabum.com.br/produtos/fotos/93427/93427_1509392175_index_gg.jpg" width='190px' height='170px' alt='logo' />
                <p>Placa-Mãe Asus Prime A320M<br /> AMD AM4, mATX, DDR4</p>
                <p>R$ 519,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images4.kabum.com.br/produtos/fotos/99034/placa-mae-gigabyte-para-amd-am4-b450-aorus-m-ddr4__1541532560_gg.jpg" width='200px' height='170px' alt='logo' />
                <p>Placa-mãe Gigabyte Aorus B450<br /> AMD AM4, mATX, DDR4</p>
                <p>R$ 869,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <hr />
            <div className='title'>
                <h2>MEMÓRIAS</h2>
            </div>
            <hr />

            <div className='card'>
                <img src="https://images7.kabum.com.br/produtos/fotos/103547/memoria-hyperx-fury-8gb-2666mhz-ddr4-cl16-preto-hx426c16fb3-8_memoria-hyperx-fury-8gb-2666mhz-ddr4-cl16-preto-hx426c16fb3-8_1566487475_gg.jpg" width='200px' height='170px' alt='logo' />
                <p>Memória HyperX Fury<br /> 2666MHz, DDR4, CL16, Preto</p>
                <p>R$ 289,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>
                <img src="https://images7.kabum.com.br/produtos/fotos/99557/99557_1545216621_index_gg.jpg" width='200px' height='170px' alt='logo' />
                <p>Memória Crucial Ballistix<br /> Sport LT, 8GB, 2400MHz, DDR4</p>
                <p>R$ 239,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>
            </div>

            <div className='card'>

                <img src="https://images8.kabum.com.br/produtos/fotos/110878/memoria-corsair-vengeance-lpx-8gb-3000mhz-ddr4-c16-black-cmk8gx4m1d3000c16_1590146420_gg.jpg" width='200px' height='170px' alt='logo' />
                <p>Memória Corsair Vengeance<br /> 8GB 3000Mhz DDR4 C16 Black</p>
                <p>R$ 374,90</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>

            </div>

            <div className='card'>

                <img src="https://www.pichau.com.br/media/catalog/product/cache/83fd0eb49e32eb24f1a05fa91ed67943/t/l/tlprd48g3000hc16c011.jpg" width='200px' height='170px' alt='logo' />
                <p>Memória T-Force Vulcan Pichau<br /> 8GB DDR4 3000MHZ</p>
                <p>R$319,00</p>
                <Link to='/formulario'>COMPRAR PRODUTO</Link>

            </div>



        </div>
    )
}

export default Produtos
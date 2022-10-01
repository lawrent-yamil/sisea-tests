import '/src/css/Contacto.css'

function Contacto() {

    return (
        <>
        <div id='Contacto'>
            <h1 className='titulo-contacto'>Contactenos</h1>
            <div className='contacto'>
                <div className='info-contacto'>
                    <div className='cuadro1'>
                        <h5><b>Solicite una cita</b></h5>
                        <p>Oficinas: 8:00 AM - 5:00 PM</p>
                        <p>Monitoreo 24 horas</p>
                        <p>Soporte tecnico: 8:00 am - 5:00 pm</p>
                        <p>contacto@sisea.co.cr</p>
                        <p>Telefono: +506 2225-2121</p>
                    </div>
                    <div className='cuadro2'>
                        <h5><b>Encuéntrenos</b></h5>
                        <p>Dirección física: De Multiplaza, 800 metros este y 200 metros norte edificio K1, Curridabat, San José, Costa Rica</p>
                    </div>
                    <div className="block-left"></div>
                        <div className="container">
                            <div className='wraper'>
                                <h5><b>Comuniquese</b></h5>
                            <div className="button" 
                                onClick={() => {
                                    window.open("https://www.instagram.com/sisea_seguridad", "_blank");
                            }}>
                            <div className="icon"><i className="fab fa-instagram"></i></div>
                                <span>Instagram</span>
                            </div>
                            <div className="button"
                                onClick={() => {
                                    window.open("https://www.facebook.com/SISEA", "_blank");
                            }}>
                            <div className="icon"><i className="fab fa-facebook"></i></div>
                                <span>facebook</span>
                            </div>
                            <div className="button"
                                onClick={() => {
                                    window.open("https://api.whatsapp.com/send?phone=50672920011", "_blank");
                            }}>
                            <div className="icon"><i className="fab fa-whatsapp"></i></div>
                                <span>whatsapp</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formulario'>
                    <section className="contact section scroll-spy-section" id="contact">
                        <h2 className="heading-underline">PREGUNTANOS DIRECTAMENTE</h2>
                        <p>CONSULTAS, PRESUPUESTOS, COMPRAS, O AFLIACIONES </p>
                        <div className="wrapper">
                        <form 
                            action="https://formsubmit.co/pedroborbonserrano@gmail.com" 
                            method="POST"
                            className="contact__form"
                        >
                            <input
                            type="hidden"
                            name="_subject"
                            value="Correo proveniente de la página!"
                            />
                            <input
                            type="hidden"
                            name="_next"
                            value="#"
                            />
                            <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="contact__form-input"
                            placeholder='Nombre:'
                            />
                            <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="contact__form-input"
                            placeholder='Correo Electrónico:'
                            />
                            <textarea
                            type="text"
                            name="message"
                            id="msg"
                            required
                            className="contact__form-input"
                            placeholder='Mensaje:'
                            />
                            <button type="submit" className="btn contact__form-btn">
                            ENVIAR
                            <div className="shadow"></div>
                            </button>
                            <input type="hidden" name="_next" value="https://future-technologies-cr.netlify.app/"></input>
                        </form>
                        </div>
                        <div className="block-left"></div>
                    </section>
                </div>
            </div>
        </div>       
        </>
    )
}

export default Contacto
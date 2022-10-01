import { HashLink as Link } from "react-router-hash-link";
import "/src/css/Catalogo.css";
import * as img from "../assets/img";
import Tarjeta from "./Tarjeta";

function Catalogo() {
  return (
    <>
      <div className="relleno"></div>
      <div id="Catalogo">
        <h1 className="titulo-catalogo">Cat&aacute;logo</h1>
        <p className="subtitulo-catalogo">
          Para consultar o adquirir cualquiera de nuestros productos contactenos
        </p>
        <div className="fila-catalogo">
          <h3 type="button" className="card-button-catalogo">
            <Link to="/#Contacto">Contacto</Link>
          </h3>
        </div>
        <div className="row-catalogo">
          
            <div className="column-catalogo">
              <Tarjeta
                img={img.default.product1}
                title={"Panel de control vista"}
              >
                Expandible de 48 zonas alambradas o inalámbricas.
                <br />
                8 zonas básicas alambradas, hasta 15 zonas dobladas.
                <br />
                3 particiones independientes, una puede ser
                <br />
                seleccionada como área común.
                <br />
                48 códigos de usuario, cada uno con niveles asignables de
                autoridad.
                <br />
                Restablecimiento automático de alarma.
                <br />
                Controlado por reloj de tiempo real y con capacidad de 254
                eventos en memoria.
                <br />
                Agenda hora /Día para usuarios.
              </Tarjeta>
              <Tarjeta
                img={img.default.produc4}
                title={"Detector de moviviento interno"}
              >
                Gran rechazo a EMI y RFI (interferencias electromagnéticas y de
                radiofrecuencia
                <br />
                Circuito Impreso usa sólo componentes de montaje en superficie
                <br />
                Relé de estado sólido
                <br />
                11m X 11m (35ft x 35ft); ángulo de visión de 110°
                <br />
                Ver características y especificaciones comunes a todos los
                Detectores de Movimiento Analógicos.
              </Tarjeta>
              <Tarjeta img={img.default.produc7} title={"Contacto magnético"}>
                Montaje en L ajustable.
                <br />
                Cable blindado.
                <br />
                Protección contra humedad e impacto.
                <br />
                Para portones, cocheras y cortinas metálicas.
              </Tarjeta>
              <Tarjeta img={img.default.produc10} title={"Batería sellada"}>
                Recargable.
                <br />
                Batería de Gel.
                <br />
                12 volt y 4 amp.
              </Tarjeta>
              <Tarjeta
                img={img.default.produc13}
                title={"Estación Manual de aviso de Incendios"}
              >
                De doble acción.
                <br />
                Leyenda en español.
                <br />
                Cables cubiertos.
                <br />
                Color roja.
                <br />
                Restablecimiento por llave.
                <br />
                Alambrada.
              </Tarjeta>
              <Tarjeta
                img={img.default.produc16}
                title={"Sensor Fotoeléctrico para Exteriores"}
              >
                Sensor pasivo infrarrojo.
                <br />
                Cobertura 12x15 metros.
                <br />
                Protección IP 54 (polvo y rocío de agua).
                <br />
                Discriminación de mascotas por lente.
                <br />
                Led indicador.
                <br />
                Áreas semi-expuestas como patios de luz , cochera, áticos,
                cielorrasos, balcones, parqueos y áreas abiertas.
              </Tarjeta>
              <Tarjeta img={img.default.produc19} title={"Cámara de Video WIFI/IP"}>
                Resolución FULL HD 1080P / 2 Mega PIxel.
                <br />
                Sensor de Imagen CMOS.
                <br />
                Sistema de señal: PAL/NTSC.
                <br />
                Iluminación Nocturna: 0.1 LUX IR On.
                <br />
                Lente: 2.8-12 mm Varifocal
                <br />
                Doble Rayo.
                <br />
                1 Salida Red RJ-45 10/100.
                <br />
                1 Wifi (IEEE802.11b/g/n),2.4Ghz
                <br />
                Color y Blanco Negro
                <br />
                Rango IR hasta 30 m.
                <br />
                30 FPS Fotografias por Segundo
                <br />
                ONVIF 2.4
                <br />
                P2P (No requiere ip fija)
                <br />
                Soporta Micro SD 128GB Incluye Memoria 32GB
                <br />
                IP66 Metal
                <br />
                Smart Phone IPhone,Ipad,Android,Tablet
              </Tarjeta>
              <Tarjeta img={img.default.kit1} title={"KIT GAS"}>
                1 Panel de control HONEYWELL
                <br />
                1 Teclado de control
                <br />
                1 Transformador eléctrico
                <br />
                1 Sirena electrónica
                <br />
                1 Batería sellada recargable 4AMP
                <br />
                1 Detector de movimiento
                <br />
                1 Contacto simple para puerta
                <br />
                1 Detector de humo
                <br />
                1 Válvula controladora GAS
                <br />
                1 Placa distintiva
                <br />
                Servicio de monitoreo 24/7
                <br />
                Respuesta Armada Motorizada 24/7 (Disponible en áreas de
                cobertura)
                <br />
                Servicio de reportes vía Email
              </Tarjeta>
              <Tarjeta img={img.default.kit4} title={"KIT 250"}>
                1 Panel de control HONEYWELL
                <br />
                1 Teclado de control
                <br />
                1 Transformador eléctrico
                <br />
                1 Sirena electrónica
                <br />
                1 Batería sellada recargable 4AMP
                <br />
                3 Detectores de movimiento inalámbricos
                <br />
                3 Contactos simples para puerta inalámbricos
                <br />
                2 Llave inalámbrica para ARMAR/DESARMAR
                <br />
                1 Placa distintiva
                <br />
                Servicio de monitoreo 24/7
                <br />
                Respuesta Armada Motorizada 24/7 (disponible en áreas de
                cobertura)
                <br />
                Servicio de reportes vía Email
              </Tarjeta>
              <Tarjeta img={img.default.kit7} title={"KIT 4 Cámaras"}>
                1 Videograbador digital FULL HD
                <br />
                5 Mp de 4 canales salida HDMI
                <br />
                4 Cámaras mini-domo FULL HD 5 Mp
                <br />
                1 Fuente regulada de 4 salidas
                <br />
                1 Disco duro 1Tb SATA
                <br />
                1 Placa distintiva
                <br />
                Tecnología P2P (no requiere IP Fija)
                <br />
                Compatible ANDROID/IOS
              </Tarjeta>
            </div>
            <div className="column-catalogo">
              <Tarjeta img={img.default.produc2} title={"Módulo de comunicación GRR-SISEA"}>
                Permite la comunicación de forma inalámbrica entre su sistema de
                seguridad y nuestro Centro de Monitoreo, no requiere líneas
                telefónicas o cableados extras.
                <br />
                Medidor de señal celular
                <br />
                Supervisión 24 horas del módulo y servicio celular
                <br />
                Funciona con cualquier operador autorizado de línea celular.
                <br />
                Tiene respaldo/backup hasta 8 horas sin fluido eléctrico.
              </Tarjeta>
              <Tarjeta img={img.default.produc5} title={"Detector de movimiento interno"}>
                Patrón de cobertura de 11 x 12 m.
                <br />
                Compensación de temperatura.
                <br />
                Protección UV en la lente.
                <br />
                Tamper en la parte frontal y trasera.
                <br />
                Temperatura de operación -10 a 50º C.
                <br />
                Alerta por baja temperatura.
                <br />
                Batería de LITIUM3V.
              </Tarjeta>
              <Tarjeta img={img.default.produc8} title={"Llaves inalámbricas"}>
                4 botones programables.
                <br />
                LED de comando.
                <br />
                Teclas que reducen las falsas activaciones.
                <br />
                Batería de lithium de larga vida.
                <br />
                Dimensiones 57 x 31.75 x 12.7 m.m
              </Tarjeta>
              <Tarjeta img={img.default.produc11} title={"Sirena"}>
                Combinación de altavoz y accionador de sirena de 6 a 12VDC.
                <br />
                Dos tonos: constante o discontinuo.
                <br />
                Cables cubiertos.
                <br />
                Potencia nominal 20 watts.
                <br />
                La placa de seguridad incorporada protege a los cables de
                ataques.
              </Tarjeta>
              <Tarjeta img={img.default.produc14} title={"Luz estroboscópica"}>
                Color Roja.
                <br />
                Leyenda en español.
                <br />
                Luz estroboscopica blanca.
                <br />
                Alambrada.
                <br />
                Montaje a Pared.
              </Tarjeta>
              <Tarjeta
                img={img.default.produc17}
                title={"Sensor líneal de barrera infraroja"}
              >
                Detector de Barrera por infrarrojos.
                <br />
                Alcance máx de detección 60 mts.
                <br />
                Tamper / Salida de réle.
                <br />
                Alimentación DC12V.
                <br />
                Alambrado.
                <br />
                Doble Rayo.
                <br />
                Amplitud máx. de propagación del haz en el receptor 1.5 m<br />
                Tapias, jardines, parqueos y mallas.
              </Tarjeta>
              <Tarjeta
                img={img.default.produc20}
                title={"Video grabador de 4,8,16 canales Hibrido"}
              >
                Grabador de 4,8 y 16 canales.
                <br />
                Soporta cámaras 5 Mp, 4 HD-TVI, AHD y análogas.
                <br />
                Full HD 5 mp.
                <br />
                Soporta 1 cámaras IP.
                <br />
                Salida HDMI 1: HDMI1 1920 x 1080/60Hz
                <br />
                Disco de 1 TB, posibilidad de expansión hasta 6TB.
                <br />
                Todos los Canales: 5M-N@10FPS.
                <br />
                Compatible con dispositivos móviles Android & IOS.
                <br />
                Salida para control de domo RS-485.
                <br />
                Salidas USB
                <br />
                Fuente de alimentación.
              </Tarjeta>
              <Tarjeta img={img.default.kit2} title={"KIT 180"}>
                1 Panel de control HONEYWELL
                <br />
                1 Teclado de control
                <br />
                1 Transformador eléctrico
                <br />
                1 Sirena electrónica
                <br />
                1 Batería sellada recargable 4AMP
                <br />
                2 Detectores de movimiento
                <br />
                2 Contactos simples para puerta
                <br />
                1 Llave inalámbrica para ARMAR/DESARMAR
                <br />
                1 Placa distintiva
                <br />
                Servicio de monitoreo 24/7
                <br />
                Respuesta Armada Motorizada 24/7 (disponible en áreas de
                cobertura)
                <br />
                Servicio de reportes vía Email
              </Tarjeta>
              <Tarjeta className="huge" img={img.default.kit2} title={"KIT 200 + 2 CAM"}>
                1 Panel de control HONEYWELL
                <br />
                1 Teclado de control
                <br />
                1 Transformador eléctrico
                <br />
                1 Sirena electrónica
                <br />
                1 Batería sellada recargable 4AMP
                <br />
                2 Detectores de movimiento
                <br />
                2 Contactos simples para puerta
                <br />
                2 Llave inalámbrica para ARMAR/DESARMAR
                <br />
                1 Placa distintiva
                <br />
                Servicio de monitoreo 24/7
                <br />
                Respuesta Armada Motorizada 24/7 (disponible en áreas de
                cobertura)
                <br />
                Servicio de reportes vía Email
                <br />
                1 Videograbador digital FULL HD 5 Mp de 4 canales salida HDMI
                <br />
                2 Cámaras mini-domo FULL HD 5 Mp.
                <br />
                1 Fuente regulada de 4 salidas
                <br />
                1 Disco duro 1Tb SATA
                <br />
                Tecnología P2P (no requiere IP Fija)
                <br />
                Compatible ANDROID/IOS
              </Tarjeta>
              <Tarjeta img={img.default.kit8} title={"KIT 8 Cámaras"}>
                1 Videograbador digital FULL HD
                <br />
                5 Mp de 8 canales salida HDMI
                <br />
                8 Cámaras mini-domo FULL HD 5 Mp
                <br />
                1 Fuente regulada de 4 salidas
                <br />
                1 Disco duro 2Tb SATA
                <br />
                1 Placa distintiva
                <br />
                Tecnología P2P (no requiere IP Fija)
                <br />
                Compatible ANDROID/IOS
              </Tarjeta>
            </div>
            <div className="column-catalogo">
              <Tarjeta img={img.default.produc3} title={"Teclado de control 6150 RF"}>
                Receptor inalámbrico de 16 Zonas 5881ENM.
                <br />
                Transmisor de estado 5800TM
                <br />
                Solución perfecta cuando se requiera utilizar zonas
                inalámbricas.
                <br />
                Sólo requiere un tendido de cuatro cables.
                <br />
                Completamente compatible con todos los dispositivos Honeywell
                inalámbricos de la serie 5800.
                <br />
                Teclas sensibles al tacto.
                <br />
                Teclado Iluminado.
              </Tarjeta>
              <Tarjeta img={img.default.produc6} title={"Contacto magnético"}>
                Contacto Inalámbrico.
                <br />
                Color blanco.
                <br />
                Batería supervisada por el panel.
                <br />
                Diseño Elegante.
                <br />
                Incluye Batería de 3 Volt.
              </Tarjeta>
              <Tarjeta img={img.default.produc9} title={"Transformador 16.5 VAC."}>
                Para uso con paneles.
                <br />
                Transformador regulado.
                <br />
                Aprobado por UL.
              </Tarjeta>
              <Tarjeta img={img.default.produc12} title={"Sensor de Humo"}>
                Fotoeléctrico y temperatura.
                <br />
                Áreas Internas.
                <br />
                Alambrado.
              </Tarjeta>
              <Tarjeta img={img.default.produc15} title={"Sensor doble tecnología"}>
                Sensor infrarrojo pasivo y microondas.
                <br />
                Cobertura 12x12 metros
                <br />
                Inmunidad a mascotas hasta 40 Lbs
                <br />
                Led indicador
                <br />
                Alambrado
                <br />
                Áreas semi-expuestas como patios de luz , cochera, áticos,
                cielorrasos y balcones.
              </Tarjeta>
              <Tarjeta img={img.default.produc18} title={"Cámara de video tipo mini domo"}>
                Max 25 fps@5MP (16:9 video output)
                <br />
                CVI/CVBS/AHD/TVI switchable.
                <br />
                Sistema de señal: PAL/NTSC.
                <br />
                Lente: 3.6 mm
                <br />
                Micrófono incorporado.
                <br />
                1 Salida analógica de alta definición.
                <br />
                Rango IR hasta 300 m, IR inteligente. IP67
              </Tarjeta>
              <Tarjeta
                img={img.default.produc21}
                title={
                  "Sistema de control de accesso autocontenidos o administrados"
                }
              >
                Sistemas que se integran a través de un PC local o remoto.
                <br />
                Uso de un software de control que permite llevar un registro de
                todas las operaciones realizadas.
                <br />
                Bitácora en fecha, horario, autorización y usuarios.
                <br />
                Aplicaciones sencillas hasta sistemas muy complejos y
                sofisticados según se requiera.
                <br />
                Controlar y administrar puertas o acciones, según la necesidad.
              </Tarjeta>
              <Tarjeta img={img.default.kit3} title={"KIT 200"}>
                1 Panel de control HONEYWELL
                <br />
                1 Teclado de control
                <br />
                1 Transformador eléctrico
                <br />
                1 Sirena electrónica
                <br />
                1 Batería sellada recargable 4AMP
                <br />
                2 Detectores de movimiento
                <br />
                2 Contactos simples para puerta
                <br />
                2 Llave inalámbrica para ARMAR/DESARMAR
                <br />
                1 Placa distintiva
                <br />
                Servicio de monitoreo 24/7
                <br />
                Respuesta Armada Motorizada 24/7 (disponible en áreas de
                cobertura)
                <br />
                Servicio de reportes vía Email
              </Tarjeta>
              <Tarjeta img={img.default.kit6} title={"KIT 200 + 4 CAM"}>
                1 Panel de control HONEYWELL 1 Teclado de control 1
                Transformador eléctrico 1 Sirena electrónica 1 Batería sellada
                recargable 4AMP 2 Detectores de movimiento 2 Contactos simples
                para puerta 2 Llave inalámbrica para ARMAR/DESARMAR 1 Placa
                distintiva Servicio de monitoreo 24/7 Respuesta Armada
                Motorizada 24/7 (disponible en áreas de cobertura) Servicio de
                reportes vía Email 1 Videograbador digital FULL HD 5 Mp de 4
                canales salida HDMI 4 Cámaras mini-domo FULL HD 5 Mp. 1 Fuente
                regulada de 4 salidas 1 Disco duro 1Tb SATA Tecnología P2P (no
                requiere IP Fija) Compatible ANDROID/IOS
              </Tarjeta>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Catalogo;

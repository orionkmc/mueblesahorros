$(document).ready(function() {


  $('.mas, .menos').click("on", function(e) {
    let cantidad = $(this).siblings('.cantidad');
    let min = parseInt(cantidad.attr('min'));
    let max = parseInt(cantidad.attr('max'));
    e.preventDefault();
    let current_value = parseInt(cantidad.val());
    let classname = $(this).attr("class");
    if (classname === "menos") {
      if (current_value == min) {
        return;
      } else {
        cantidad.val(current_value - 1);
      }
    } else {
      if (current_value == max) {
        return;
      } else {
        cantidad.val(current_value + 1);
      }
    }
  })
  $('.cantidad').change(function() {
    let min = parseInt($(this).attr('min'));
    let max = parseInt($(this).attr('max'));
    if (parseInt($(this).val()) < min) {
      $(this).val(min)
    } else if (parseInt($(this).val()) > max) {
      $(this).val(max)
    }
  })
  
  $('#validar-cupon').click(function() {
    if ($('#cupon').val() == '1234') {
      $('#result-cupon').text('¡Cupón válido!')
      $('#result-cupon').css({'color': 'var(--primary-color)', 'margin-top': '1rem'})
      $('#monto-cupon').html('-5&euro;')
      $('#monto-cupon').css({'margin-top': '1rem'})
    } else {
      $('#result-cupon').text('Este cupón no existe')
      $('#result-cupon').css({'color': 'red', 'margin-top': '1rem'})
      $('#monto-cupon').text('')
    }
  })

  let envioDireccion = $('#envioDireccion');
  let envioIsla = $('#envioIsla');
  let envioMunicipio = $('#envioMunicipio');
  let listaIslas = [
    'Gran Canaria',
    'Tenerife',
    'Fuerteventura',
    'Lanzarote',
    'La Palma',
    'El Hierro',
    'La Gomera',
    'La Graciosa',
  ]
  let listaMunicipiosGC = [
    'Las Palmas de Gran Canaria',
    'Arucas',
    'Santa Brígida',
    'Telde',
    'Teror',
    'Valleseco',
    'Firgas',
    'Moya',
    'Santa María de Guía',
    'Gáldar',
    'Agaete',
    'Artenara',
    'Vega de San Mateo',
    'Valsequillo de Gran Canaria',
    'Ingenio',
    'Agüimes',
    'Santa Lucía de Tirajana',
    'San Bartolomé de Tirajana',
    'Tejeda',
    'La Aldea de San Nicolás',
    'Mogán',
  ]
  let listaMunicipioOtros = ['Ninguno']

  function mostrarLugares(arreglo, lugar) {
    let elem
    for (let i = 0; i < arreglo.length; i++) {
      elem += '<option value="' + arreglo[i] + '">' + arreglo[i] +'</option>'
    }
    lugar.html(elem)
  }

  mostrarLugares(listaIslas, envioIsla)
  mostrarLugares(listaMunicipiosGC, envioMunicipio)

  function valorIsla() {
    let valor = envioIsla.val()
    if (valor !== 'Gran Canaria') {
      mostrarLugares(listaMunicipioOtros, envioMunicipio)
      tipoEnvio.html(textEnvioNoDisponible)
    } else {
      mostrarLugares(listaMunicipiosGC, envioMunicipio)
      tipoEnvio.html(textEnvioDomicilio)
    }
  }
  
  envioIsla.change(function() {
    valorIsla()
  })

  let costoEnvio = 100
  let initCostoPiso = 4
  
  function calcCostoEnvio() {
    let valorDireccion = parseInt($(envioDireccion).val())
    let addCostoEnvio = 0
    if (valorDireccion >= initCostoPiso) {
      addCostoEnvio = (valorDireccion - (initCostoPiso - 1)) * 5
    }
    totalCostoEnvio = (costoEnvio + addCostoEnvio)
  }  
  calcCostoEnvio()

  let tipoEnvio = $('#tipo-envio')
  let textEnvioDomicilio
  let textEnvioTienda
  let textEnvioNoDisponible
  function textHTML() {
    textEnvioDomicilio = 
      '<div class="row">' +
        '<div class="col d-flex justify-content-between">' +
          '<p id="result-envio" class="textos-parrafos m-0">Envío a domicilio</p>' +
          '<p id="monto-envio" class="title-textos m-0">' + totalCostoEnvio + '&euro;</p>' +
        '</div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="col d-flex justify-content-between">' +
          '<p id="text-plazo-envio" class="textos-parrafos m-0">Plazo de entrega</p>' +
          '<p id="plazo-envio" class="textos-parrafos m-0">Apróx. 3 semanas</p>' +
        '</div>' +
      '</div>'
      
    textEnvioTienda = 
      '<div class="row">' +
        '<div class="col d-flex justify-content-between">' +
          '<p id="result-envio" class="textos-parrafos m-0">Recogida en tienda</p>' +
          '<p id="monto-envio" class="title-textos m-0">Gratis</p>' +
        '</div>' +
      '</div>'

    textEnvioNoDisponible = 
      '<div class="row">' +
        '<div class="col d-flex justify-content-between">' +
          '<p id="result-envio" class="textos-parrafos m-0">' +
            'No hay envíos disponibles para su dirección.' +
            '<br><br>' +
            'Por favor contacte con nuestro soporte para solicitar un presupuesto de envio.' +
            '<br><br>' +
            'Teléfono fijo: <a href="tel:+34928257098"><strong>+34 928 25 70 98</strong></a>' +
            '<br>' +
            'Móvil / Whatsapp:: <a href="tel:+34657803567"><strong>+34 657 80 35 67</strong></a>' +
          '</p>' +
        '</div>' +
      '</div>'
  }
  textHTML()

  envioDireccion.change(function() {
    calcCostoEnvio()
    textHTML()
    tipoEnvio.html(textEnvioDomicilio)
  })

  $('#tipoEnvioDomicilio, #tipoEnvioTienda').change(function() {
    if ($('#tipoEnvioDomicilio').is(':checked')) {
      tipoEnvio.html(textEnvioDomicilio)
      envioDireccion.prop('disabled', false)
      envioIsla.prop('disabled', false)
      envioMunicipio.prop('disabled', false)
      valorIsla()
    } else if ($('#tipoEnvioTienda').is(':checked')) {
      tipoEnvio.html(textEnvioTienda)
      envioDireccion.prop('disabled', true)
      envioIsla.prop('disabled', true)
      envioMunicipio.prop('disabled', true)
    }
  })


})

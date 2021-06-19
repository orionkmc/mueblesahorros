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
      $('#result-cupon').css('color', 'var(--primary-color)')
      $('#monto-cupon').html('-5&euro;')
    } else {
      $('#result-cupon').text('Este cupón no existe')
      $('#result-cupon').css('color', 'red')
      $('#monto-cupon').text('')
    }
  })

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
  
  envioIsla.change(function() {
    let valor = envioIsla.val()
    if (valor == 'Gran Canaria') {
      mostrarLugares(listaMunicipiosGC, envioMunicipio)
    } else {
      mostrarLugares(listaMunicipioOtros, envioMunicipio)
    }
  })

  let tipoEnvio = $('#tipo-envio')

  $('#tipoEnvioDomicilio, #tipoEnvioTienda').change(function() {
    if ($('#tipoEnvioDomicilio').is(':checked')) {
      tipoEnvio.html('<p id="result-envio" class="textos-parrafos">Domicilio</p><p id="monto-envio" class="title-textos">Pago</p>')
    } else if ($('#tipoEnvioTienda').is(':checked')) {
      tipoEnvio.html('<p id="result-envio" class="textos-parrafos">Tienda</p><p id="monto-envio" class="title-textos">Gratis</p>')
    }
  })


})

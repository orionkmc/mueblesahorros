$(document).ready(function(){$(".mas, .menos").click("on",function(a){let o=$(this).siblings(".cantidad");var e=parseInt(o.attr("min")),t=parseInt(o.attr("max"));a.preventDefault();a=parseInt(o.val());"menos"===$(this).attr("class")?a==e||o.val(a-1):a==t||o.val(a+1)}),$(".cantidad").change(function(){var a=parseInt($(this).attr("min")),o=parseInt($(this).attr("max"));parseInt($(this).val())<a?$(this).val(a):parseInt($(this).val())>o&&$(this).val(o)}),$("#validar-cupon").click(function(){"1234"==$("#cupon").val()?($("#result-cupon").text("¡Cupón válido!"),$("#result-cupon").css({color:"var(--primary-color)","margin-top":"0.6rem"}),$("#monto-cupon").html("-5&euro;"),$("#monto-cupon").css({"margin-top":"0.6rem"})):($("#result-cupon").text("Este cupón no existe"),$("#result-cupon").css({color:"red","margin-top":"0.6rem"}),$("#monto-cupon").text(""))});let e=$("#envioDireccion"),a=$("#envioIsla"),o=$("#envioMunicipio");let t=["Las Palmas de Gran Canaria","Arucas","Santa Brígida","Telde","Teror","Valleseco","Firgas","Moya","Santa María de Guía","Gáldar","Agaete","Artenara","Vega de San Mateo","Valsequillo de Gran Canaria","Ingenio","Agüimes","Santa Lucía de Tirajana","San Bartolomé de Tirajana","Tejeda","La Aldea de San Nicolás","Mogán"],n=["Ninguno"];function i(o,a){let e;for(let a=0;a<o.length;a++)e+='<option value="'+o[a]+'">'+o[a]+"</option>";a.html(e)}function s(){"Gran Canaria"!==a.val()?(i(n,o),l.html(d)):(i(t,o),l.html(c))}i(["Gran Canaria","Tenerife","Fuerteventura","Lanzarote","La Palma","El Hierro","La Gomera","La Graciosa"],a),i(t,o),a.change(function(){s()});function r(){var a=parseInt($(e).val());let o=4<=a?5*(a-3):0;totalCostoEnvio=100+o}r();let l=$("#tipo-envio"),c,p,d;function v(){c='<div class="row"><div class="col d-flex justify-content-between"><p id="result-envio" class="textos-parrafos m-0">Envío a domicilio</p><p id="monto-envio" class="title-textos m-0">'+totalCostoEnvio+'&euro;</p></div></div><div class="row"><div class="col d-flex justify-content-between"><p id="text-plazo-envio" class="textos-parrafos m-0">Plazo de entrega</p><p id="plazo-envio" class="textos-parrafos m-0">Apróx. 3 semanas</p></div></div>',p='<div class="row"><div class="col d-flex justify-content-between"><p id="result-envio" class="textos-parrafos m-0">Recogida en tienda</p><p id="monto-envio" class="title-textos m-0">Gratis</p></div></div>',d='<div class="row"><div class="col d-flex justify-content-between"><p id="result-envio" class="textos-parrafos m-0">No hay envíos disponibles para su dirección.<br><br>Por favor contacte con nuestro soporte para solicitar un presupuesto de envio.<br><br>Teléfono fijo: <a href="tel:+34928257098"><strong>+34 928 25 70 98</strong></a><br>Móvil / Whatsapp:: <a href="tel:+34657803567"><strong>+34 657 80 35 67</strong></a></p></div></div>'}v(),e.change(function(){r(),v(),l.html(c)}),$("#tipoEnvioDomicilio, #tipoEnvioTienda").change(function(){$("#tipoEnvioDomicilio").is(":checked")?(l.html(c),e.prop("disabled",!1),a.prop("disabled",!1),o.prop("disabled",!1),s()):$("#tipoEnvioTienda").is(":checked")&&(l.html(p),e.prop("disabled",!0),a.prop("disabled",!0),o.prop("disabled",!0))})});
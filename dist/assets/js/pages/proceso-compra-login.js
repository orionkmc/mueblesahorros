$(document).ready(function(){$(".mas, .menos").click("on",function(a){let e=$(this).siblings(".cantidad");var o=parseInt(e.attr("min")),t=parseInt(e.attr("max"));a.preventDefault();a=parseInt(e.val());"menos"===$(this).attr("class")?a==o||e.val(a-1):a==t||e.val(a+1)}),$(".cantidad").change(function(){var a=parseInt($(this).attr("min")),e=parseInt($(this).attr("max"));parseInt($(this).val())<a?$(this).val(a):parseInt($(this).val())>e&&$(this).val(e)}),$("#validar-cupon").click(function(){"1234"==$("#cupon").val()?($("#result-cupon").text("¡Cupón válido!"),$("#result-cupon").css("color","var(--primary-color)"),$("#monto-cupon").html("-5&euro;")):($("#result-cupon").text("Este cupón no existe"),$("#result-cupon").css("color","red"),$("#monto-cupon").text(""))});let o=$("#envioDireccion"),a=$("#envioIsla"),e=$("#envioMunicipio");let t=["Las Palmas de Gran Canaria","Arucas","Santa Brígida","Telde","Teror","Valleseco","Firgas","Moya","Santa María de Guía","Gáldar","Agaete","Artenara","Vega de San Mateo","Valsequillo de Gran Canaria","Ingenio","Agüimes","Santa Lucía de Tirajana","San Bartolomé de Tirajana","Tejeda","La Aldea de San Nicolás","Mogán"],n=["Ninguno"];function i(e,a){let o;for(let a=0;a<e.length;a++)o+='<option value="'+e[a]+'">'+e[a]+"</option>";a.html(o)}function s(){"Gran Canaria"!==a.val()?(i(n,e),l.html(p)):(i(t,e),l.html(c))}i(["Gran Canaria","Tenerife","Fuerteventura","Lanzarote","La Palma","El Hierro","La Gomera","La Graciosa"],a),i(t,e),a.change(function(){s()});function r(){var a=parseInt($(o).val());let e=4<=a?5*(a-3):0;totalCostoEnvio=100+e}r();let l=$("#tipo-envio"),c,d,p;function v(){c='<div class="row"><div class="col d-flex justify-content-between"><p id="result-envio" class="textos-parrafos m-0">Envío a domicilio</p><p id="monto-envio" class="title-textos m-0">'+totalCostoEnvio+'&euro;</p></div></div><div class="row"><div class="col d-flex justify-content-between"><p id="text-plazo-envio" class="textos-parrafos m-0">Plazo de entrega</p><p id="plazo-envio" class="textos-parrafos m-0">Apróx. 3 semanas</p></div></div>',d='<div class="row"><div class="col d-flex justify-content-between"><p id="result-envio" class="textos-parrafos m-0">Recogida en tienda</p><p id="monto-envio" class="title-textos m-0">Gratis</p></div></div>',p='<div class="row"><div class="col d-flex justify-content-between"><p id="result-envio" class="textos-parrafos m-0">No hay envíos disponibles para su dirección.<br><br>Por favor contacte con nuestro soporte para solicitar un presupuesto de envio.<br><br>Teléfono fijo: <a href="tel:+34928257098"><strong>+34 928 25 70 98</strong></a><br>Móvil / Whatsapp:: <a href="tel:+34657803567"><strong>+34 657 80 35 67</strong></a></p></div></div>'}v(),o.change(function(){r(),v(),l.html(c)}),$("#tipoEnvioDomicilio, #tipoEnvioTienda").change(function(){$("#tipoEnvioDomicilio").is(":checked")?(l.html(c),o.prop("disabled",!1),a.prop("disabled",!1),e.prop("disabled",!1),s()):$("#tipoEnvioTienda").is(":checked")&&(l.html(d),o.prop("disabled",!0),a.prop("disabled",!0),e.prop("disabled",!0))})});
function submitForm() {
    const material = document.getElementById("materialPiso").value;
    const superficie = document.getElementById("superficie").value;
    const energia = document.getElementById("energia").value;
    const nombre = document.getElementById("nombre").value;
    const rut = document.getElementById("rut").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const razonSocial = document.getElementById("razonSocial").value;
    const rutEmpresa = document.getElementById("rutEmpresa").value;
    const despacho = document.getElementById("despacho").value;
    const direccionDespacho = document.getElementById("direccionDespacho").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar campos obligatorios
    if (!material || !superficie || !energia || !nombre || !rut || !correo) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Crear cuerpo del correo en texto plano
    const emailBody = `
Formulario de Cotización - Arriendo y Venta:

Sustrato o Material del Piso: ${material}
Superficie Total en Metros Cuadrados: ${superficie}
Energía Eléctrica Disponible: ${energia}
Nombre y Apellido: ${nombre}
RUT: ${rut}
Correo Electrónico: ${correo}
Teléfono: ${telefono}
Razón Social Empresa: ${razonSocial || "No especificado"}
RUT Empresa: ${rutEmpresa || "No especificado"}
¿Necesitas Despacho?: ${despacho}
Dirección de Despacho: ${direccionDespacho || "No especificado"}
Mensaje: ${mensaje || "No especificado"}

Por favor,  no modifiques este mensaje. Presiona el botón "Enviar" en tu cliente de correo para completar la solicitud. 
    `;

    // Enviar correo con mailto
    window.location.href = `mailto: pmunoz@bullfloat.cl?subject=Formulario de Cotización - Arriendo y Venta&body=${encodeURIComponent(emailBody)}`;
}
function goBack() {
    window.history.back();
}

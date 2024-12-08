function submitPresupuestoForm() {
    const especificacionTecnica = document.getElementById("especificacionTecnica").value;
    const visitaTerreno = document.getElementById("visitaTerreno").value;
    const material = document.getElementById("materialPiso").value;
    const superficie = document.getElementById("superficie").value;
    const nombre = document.getElementById("nombre").value;
    const rut = document.getElementById("rut").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const razonSocial = document.getElementById("razonSocial").value;
    const rutEmpresa = document.getElementById("rutEmpresa").value;
    const tipoServicio = document.getElementById("tipoServicio").value;
    const superficieM2 = document.getElementById("superficieM2").value;
    const direccionProyecto = document.getElementById("direccionProyecto").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar campos obligatorios
    if (!especificacionTecnica || !visitaTerreno || !material || !superficie || !nombre || !rut || !correo || !telefono || !tipoServicio || !superficieM2 || !direccionProyecto) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    const emailBody = `
Formulario de Presupuesto Preliminar:

¿El proyecto cuenta con especificación técnica?: ${especificacionTecnica}
¿Necesitas visita a terreno?: ${visitaTerreno}
Sustrato o Material del Piso: ${material}
Superficie Total en Metros Cuadrados: ${superficie}
Nombre y Apellido: ${nombre}
RUT: ${rut}
Correo Electrónico: ${correo}
Teléfono: ${telefono}
Razón Social Empresa: ${razonSocial || "No especificado"}
RUT Empresa: ${rutEmpresa || "No especificado"}
Tipo de Servicio: ${tipoServicio}
Superficie en M2: ${superficieM2}
Dirección del Proyecto: ${direccionProyecto}
Mensaje: ${mensaje || "No especificado"}

Por favor, no modifiques este mensaje. Presiona el botón "Enviar" en tu cliente de correo para completar la solicitud.
    `;

    window.location.href = ` pmunoz@bullfloat.cl?subject=Formulario de Presupuesto Preliminar&body=${encodeURIComponent(emailBody)}`;
}


function goBack() {
    window.history.back();
}

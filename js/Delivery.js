Swal.fire({
    html: 'Dada la coyuntura todos los pedidos se realizan por delivery sin costo adicional.<br>Realiza tus pedidos <a href="#delivery">aqui</a>.',
    footer: 'Gracias por elegirnos.',
    confirmButtonText: 'Acepto',
    icon: 'warning',
    padding: '2rem',
    backdrop: true,
    
    position: 'top',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
    
    showCloseButton: false,
    showCancelButton: false,
    showConfirmeButton: true,
    closeButonArialLabel: 'Cerrar esta alerta',
    
    customClass: {
        content: 'content-class'
    }
    
});
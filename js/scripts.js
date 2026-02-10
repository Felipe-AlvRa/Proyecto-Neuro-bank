document.addEventListener('DOMContentLoaded', () => {

    const sideMenu = document.getElementById('sideMenu');
    const notificationsPanel = document.getElementById('notificationsPanel');
    const panelPerfil = document.getElementById('panelPerfil');

    const toggleMenu = document.getElementById('toggleMenu');
    const toggleNotifications = document.getElementById('toggleNotifications');
    const togglePerfil = document.getElementById('togglePerfil');

    function closeAll() {
        sideMenu.classList.add('d-none');
        notificationsPanel.classList.add('d-none');
        panelPerfil.classList.add('d-none');
    }

    toggleMenu.addEventListener('click', () => {
        const isOpen = !sideMenu.classList.contains('d-none');
        closeAll();
        if (!isOpen) sideMenu.classList.remove('d-none');
    });
/*------ Bton de like ------ */
    (function(){
        const icon = document.getElementById('boton_like_idea');
        if (!icon) return;
        const btn = icon.closest('button') || icon;
        btn.addEventListener('click', function(){
            if (icon.classList.contains('bi-hand-thumbs-up')){
                icon.classList.remove('bi-hand-thumbs-up');
                icon.classList.add('bi-hand-thumbs-up-fill');
            } else {
                icon.classList.remove('bi-hand-thumbs-up-fill');
                icon.classList.add('bi-hand-thumbs-up');
            }
        });
    })();

    toggleNotifications.addEventListener('click', () => {
        const isOpen = !notificationsPanel.classList.contains('d-none');
        closeAll();
        if (!isOpen) notificationsPanel.classList.remove('d-none');
    });

    togglePerfil.addEventListener('click', () => {
        const isOpen = !panelPerfil.classList.contains('d-none');
        closeAll();
        if (!isOpen) panelPerfil.classList.remove('d-none');
    });
document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        closeAll();
    }
});
    // Hacer los <li> del side_resources clicables y mostrar detalles
    const resourceDetail = document.getElementById('resourceDetail');
    const sideListItems = document.querySelectorAll('.side_resources li');

    // Mapa título -> contenido HTML. Añade aquí las entradas con la clave igual
    // al texto del <li> y el HTML que quieres mostrar.
    const resourceContents = {
        "Mentalidad emprendedora": `
            <h2>Mentalidad empreedora</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus, iusto dolore illum, voluptates, fugit maiores quaerat nobis ipsam quam provident voluptatum corporis aliquid eius hic officiis vero consequatur libero quia officia reiciendis odit. A doloribus libero minima id consequatur fuga natus eligendi corrupti esse magnam quae rerum laudantium laborum provident repellendus, nulla voluptatibus? Inventore, saepe voluptate minima adipisci quam eveniet architecto soluta consequatur eligendi ad debitis maxime veniam quidem in odio tempore accusamus! Ab dolore officia a dolor aspernatur temporibus veritatis? Quas aliquid temporibus tempora soluta quia! Itaque dolores commodi rem saepe, dignissimos soluta, quidem ad et ex asperiores fugit quibusdam quas ullam aliquid nam cupiditate culpa aspernatur eius animi! Sit molestiae, ex, totam soluta aspernatur quibusdam veniam dicta blanditiis ad odit provident tenetur, perspiciatis necessitatibus cumque dignissimos qui placeat labore eius harum voluptas. Ratione ea, placeat accusantium atque tenetur exercitationem corporis ducimus sequi hic fuga sint? Aliquid, ducimus.
            </p>`,
        "Liderazgo": `
            <h2>Liderazgo</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus, iusto dolore illum, voluptates, fugit maiores quaerat nobis ipsam quam provident voluptatum corporis aliquid eius hic officiis vero consequatur libero quia officia reiciendis odit. A doloribus libero minima id consequatur fuga natus eligendi corrupti esse magnam quae rerum laudantium laborum provident repellendus, nulla voluptatibus? Inventore, saepe voluptate minima adipisci quam eveniet architecto soluta consequatur eligendi ad debitis maxime veniam quidem in odio tempore accusamus! Ab dolore officia a dolor aspernatur temporibus veritatis? Quas aliquid temporibus tempora soluta quia! Itaque dolores commodi rem saepe, dignissimos soluta, quidem ad et ex asperiores fugit quibusdam quas ullam aliquid nam cupiditate culpa aspernatur eius animi! Sit molestiae, ex, totam soluta aspernatur quibusdam veniam dicta blanditiis ad odit provident tenetur, perspiciatis necessitatibus cumque dignissimos qui placeat labore eius harum voluptas. Ratione ea, placeat accusantium atque tenetur exercitationem corporis ducimus sequi hic fuga sint? Aliquid, ducimus.
            </p>`,
        "Gestión del tiempo": `
            <h2>Gestión del tiempo</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus, iusto dolore illum, voluptates, fugit maiores quaerat nobis ipsam quam provident voluptatum corporis aliquid eius hic officiis vero consequatur libero quia officia reiciendis odit. A doloribus libero minima id consequatur fuga natus eligendi corrupti esse magnam quae rerum laudantium laborum provident repellendus, nulla voluptatibus? Inventore, saepe voluptate minima adipisci quam eveniet architecto soluta consequatur eligendi ad debitis maxime veniam quidem in odio tempore accusamus! Ab dolore officia a dolor aspernatur temporibus veritatis? Quas aliquid temporibus tempora soluta quia! Itaque dolores commodi rem saepe, dignissimos soluta, quidem ad et ex asperiores fugit quibusdam quas ullam aliquid nam cupiditate culpa aspernatur eius animi! Sit molestiae, ex, totam soluta aspernatur quibusdam veniam dicta blanditiis ad odit provident tenetur, perspiciatis necessitatibus cumque dignissimos qui placeat labore eius harum voluptas. Ratione ea, placeat accusantium atque tenetur exercitationem corporis ducimus sequi hic fuga sint? Aliquid, ducimus.
            </p>`,
        "Toma de decisiones": `
            <h2>Toma de decisiones</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus, iusto dolore illum, voluptates, fugit maiores quaerat nobis ipsam quam provident voluptatum corporis aliquid eius hic officiis vero consequatur libero quia officia reiciendis odit. A doloribus libero minima id consequatur fuga natus eligendi corrupti esse magnam quae rerum laudantium laborum provident repellendus, nulla voluptatibus? Inventore, saepe voluptate minima adipisci quam eveniet architecto soluta consequatur eligendi ad debitis maxime veniam quidem in odio tempore accusamus! Ab dolore officia a dolor aspernatur temporibus veritatis? Quas aliquid temporibus tempora soluta quia! Itaque dolores commodi rem saepe, dignissimos soluta, quidem ad et ex asperiores fugit quibusdam quas ullam aliquid nam cupiditate culpa aspernatur eius animi! Sit molestiae, ex, totam soluta aspernatur quibusdam veniam dicta blanditiis ad odit provident tenetur, perspiciatis necessitatibus cumque dignissimos qui placeat labore eius harum voluptas. Ratione ea, placeat accusantium atque tenetur exercitationem corporis ducimus sequi hic fuga sint? Aliquid, ducimus.
            </p>`,
        "Resolución de problemas": `
            <h2>Resolución de problemas</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus, iusto dolore illum, voluptates, fugit maiores quaerat nobis ipsam quam provident voluptatum corporis aliquid eius hic officiis vero consequatur libero quia officia reiciendis odit. A doloribus libero minima id consequatur fuga natus eligendi corrupti esse magnam quae rerum laudantium laborum provident repellendus, nulla voluptatibus? Inventore, saepe voluptate minima adipisci quam eveniet architecto soluta consequatur eligendi ad debitis maxime veniam quidem in odio tempore accusamus! Ab dolore officia a dolor aspernatur temporibus veritatis? Quas aliquid temporibus tempora soluta quia! Itaque dolores commodi rem saepe, dignissimos soluta, quidem ad et ex asperiores fugit quibusdam quas ullam aliquid nam cupiditate culpa aspernatur eius animi! Sit molestiae, ex, totam soluta aspernatur quibusdam veniam dicta blanditiis ad odit provident tenetur, perspiciatis necessitatibus cumque dignissimos qui placeat labore eius harum voluptas. Ratione ea, placeat accusantium atque tenetur exercitationem corporis ducimus sequi hic fuga sint? Aliquid, ducimus.
            </p>`,
        "Inteligencia emocional": `
            <h2>Inteligencia emocional</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus, iusto dolore illum, voluptates, fugit maiores quaerat nobis ipsam quam provident voluptatum corporis aliquid eius hic officiis vero consequatur libero quia officia reiciendis odit. A doloribus libero minima id consequatur fuga natus eligendi corrupti esse magnam quae rerum laudantium laborum provident repellendus, nulla voluptatibus? Inventore, saepe voluptate minima adipisci quam eveniet architecto soluta consequatur eligendi ad debitis maxime veniam quidem in odio tempore accusamus! Ab dolore officia a dolor aspernatur temporibus veritatis? Quas aliquid temporibus tempora soluta quia! Itaque dolores commodi rem saepe, dignissimos soluta, quidem ad et ex asperiores fugit quibusdam quas ullam aliquid nam cupiditate culpa aspernatur eius animi! Sit molestiae, ex, totam soluta aspernatur quibusdam veniam dicta blanditiis ad odit provident tenetur, perspiciatis necessitatibus cumque dignissimos qui placeat labore eius harum voluptas. Ratione ea, placeat accusantium atque tenetur exercitationem corporis ducimus sequi hic fuga sint? Aliquid, ducimus.
            </p>`
    };
    if (resourceDetail && sideListItems.length) {
        sideListItems.forEach(li => {
            li.addEventListener('click', (ev) => {
                // marcar seleccionado
                sideListItems.forEach(i => i.classList.remove('active'));
                li.classList.add('active');

                const title = li.textContent.trim();
                const contentHTML = resourceContents[title] || `\n                    <h2>${title}</h2>\n                    <p>Información relacionada con "${title}". Agrega una entrada en <code>resourceContents</code> para personalizar este contenido.</p>\n                `;
                resourceDetail.innerHTML = contentHTML;
                // desplazar la vista hacia el detalle si es necesario
                resourceDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
});

//------------------------------- SWAL REDES -----------------------------
document.addEventListener('DOMContentLoaded', () => {
    const btn_redes = document.getElementById('btn_redes');

    btn_redes.addEventListener('click', () => {
        Swal.fire({
            title: '¿Cómo deseas comunicarte?',
            html: `
                <div class="d-grid gap-2 mt-3">
                    <button id="btnFb" class="btn btn-outline-primary">
                        <i class="bi bi-facebook me-2"></i> Facebook
                    </button>
                    <button id="btnIg" class="btn btn-outline-primary">
                        <i class="bi bi-instagram me-2"></i> Instagram
                    </button>
                    <button id="btnWa" class="btn btn-outline-primary">
                        <i class="bi bi-whatsapp me-2"></i> WhatsApp
                    </button>
                    <button id="btGm" class="btn btn-outline-primary">
                        <i class="bi bi-google me-2"></i> Gmail
                    </button>
                    <button id="btLkd" class="btn btn-outline-primary">
                        <i class="bi bi-linkedin"></i> LinkedIn
                    </button>
                    <button id="btSn" class="btn btn-outline-primary">
                        <i class="bi bi-snapchat"></i> Snapchat
                    </button>
                </div>
            `,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'info'
        });

        document.getElementById('btnFb').addEventListener('click', () => {
            window.open('https://facebook.com', '_blank');
        });

        document.getElementById('btnIg').addEventListener('click', () => {
            window.open('https://instagram.com', '_blank');
        });

        document.getElementById('btnWa').addEventListener('click', () => {
            window.open('https://wa.me/573000000000', '_blank');
        });
        document.getElementById('btnGm').addEventListener('click', () => {
            window.open('https://gmail.com', '_blank');
        });
        document.getElementById('btnLkd').addEventListener('click', () => {
            window.open('https://linkedin.com', '_blank');
        });
        document.getElementById('btnSn').addEventListener('click', () => {
            window.open('https://snapchat.com', '_blank');
        });
    });
});


document.querySelector('.btn-whatsapp').addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${url}`, '_blank');
});

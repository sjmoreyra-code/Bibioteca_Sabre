tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-bright": "#38393b",
        "tertiary-container": "#ffdad6",
        "on-tertiary-fixed": "#410003",
        "surface-container-high": "#292a2c",
        "background": "#121315",
        "error-container": "#93000a",
        "on-secondary-fixed-variant": "#454747",
        "on-secondary": "#2f3131",
        "on-primary-fixed-variant": "#434b00",
        "on-tertiary-container": "#c22225",
        "secondary-fixed-dim": "#c6c6c7",
        "surface-container-highest": "#343537",
        "inverse-surface": "#e3e2e5",
        "outline": "#919378",
        "on-primary-container": "#606a00",
        "primary": "#ffffff",
        "secondary-fixed": "#e2e2e2",
        "on-secondary-fixed": "#1a1c1c",
        "on-background": "#e3e2e5",
        "tertiary": "#ffffff",
        "secondary-container": "#454747",
        "surface-container-low": "#1b1c1e",
        "surface-container-lowest": "#0d0e10",
        "primary-container": "#d9ef00",
        "surface-container": "#1f2022",
        "on-error": "#690005",
        "on-tertiary": "#680008",
        "on-surface": "#e3e2e5",
        "on-error-container": "#ffdad6",
        "surface-tint": "#bed100",
        "error": "#ffb4ab",
        "on-primary": "#2e3300",
        "surface": "#121315",
        "primary-fixed-dim": "#bed100",
        "inverse-on-surface": "#303033",
        "surface-dim": "#121315",
        "outline-variant": "#464832",
        "surface-variant": "#343537",
        "on-tertiary-fixed-variant": "#930010",
        "secondary": "#c6c6c7",
        "on-primary-fixed": "#1a1e00",
        "tertiary-fixed-dim": "#ffb3ac",
        "tertiary-fixed": "#ffdad6",
        "on-secondary-container": "#b4b5b5",
        "inverse-primary": "#5a6400",
        "on-surface-variant": "#c7c9ab",
        "primary-fixed": "#d9ef00"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "gutter-mobile": "1rem",
        "margin-mobile": "1rem",
        "space-xl": "3rem",
        "space-lg": "2rem",
        "space-xs": "0.375rem",
        "space-md": "1.25rem",
        "space-sm": "0.75rem",
        "gutter": "1.5rem",
        "margin": "2.5rem"
      },
      fontFamily: {
        "headline-md": ["Public Sans"],
        "headline-lg-mobile": ["Public Sans"],
        "label-uppercase": ["Public Sans"],
        "body-base": ["Public Sans"],
        "title-card": ["Public Sans"],
        "body-lg": ["Public Sans"],
        "button-text": ["Public Sans"],
        "headline-lg": ["Public Sans"],
        "display-hero": ["Public Sans"],
        "body-sm": ["Public Sans"]
      },
      fontSize: {
        "headline-md": ["20px", { "lineHeight": "28px", "letterSpacing": "0.02em", "fontWeight": "700" }],
        "headline-lg-mobile": ["22px", { "lineHeight": "28px", "letterSpacing": "0.05em", "fontWeight": "800" }],
        "label-uppercase": ["13px", { "lineHeight": "16px", "letterSpacing": "0.08em", "fontWeight": "800" }],
        "body-base": ["15px", { "lineHeight": "22px", "letterSpacing": "0", "fontWeight": "400" }],
        "title-card": ["18px", { "lineHeight": "24px", "letterSpacing": "0.01em", "fontWeight": "700" }],
        "body-lg": ["17px", { "lineHeight": "26px", "letterSpacing": "0.01em", "fontWeight": "400" }],
        "button-text": ["15px", { "lineHeight": "20px", "letterSpacing": "0.03em", "fontWeight": "800" }],
        "headline-lg": ["28px", { "lineHeight": "36px", "letterSpacing": "0.06em", "fontWeight": "800" }],
        "display-hero": ["44px", { "lineHeight": "52px", "letterSpacing": "0.04em", "fontWeight": "900" }],
        "body-sm": ["13px", { "lineHeight": "18px", "letterSpacing": "0.01em", "fontWeight": "500" }]
      }
    }
  }
};

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const icon = button.querySelector('span');
  if (document.documentElement.classList.contains('dark')) {
    icon.textContent = 'dark_mode';
  } else {
    icon.textContent = 'light_mode';
  }
}

// Cambiar entre pestañas "Actuales" e "Historial"
function switchTab(tab) {
  const btnActuales = document.getElementById('tab-btn-actuales');
  const btnHistorial = document.getElementById('tab-btn-historial');
  const contentActuales = document.getElementById('tab-actuales');
  const contentHistorial = document.getElementById('tab-historial');

  if (tab === 'actuales') {
    btnActuales.className = 'flex-1 py-space-sm px-space-xs rounded-lg font-button-text text-button-text uppercase transition-all duration-200 flex items-center justify-center gap-space-xs bg-primary-container text-on-primary-fixed shadow-md';
    btnActuales.setAttribute('aria-selected', 'true');
    btnHistorial.className = 'flex-1 py-space-sm px-space-xs rounded-lg font-button-text text-button-text uppercase transition-all duration-200 flex items-center justify-center gap-space-xs bg-surface-container text-on-surface-variant hover:text-primary';
    btnHistorial.setAttribute('aria-selected', 'false');

    contentActuales.classList.remove('hidden');
    contentActuales.classList.add('flex');
    contentHistorial.classList.add('hidden');
    contentHistorial.classList.remove('flex');
  } else {
    btnHistorial.className = 'flex-1 py-space-sm px-space-xs rounded-lg font-button-text text-button-text uppercase transition-all duration-200 flex items-center justify-center gap-space-xs bg-primary-container text-on-primary-fixed shadow-md';
    btnHistorial.setAttribute('aria-selected', 'true');
    btnActuales.className = 'flex-1 py-space-sm px-space-xs rounded-lg font-button-text text-button-text uppercase transition-all duration-200 flex items-center justify-center gap-space-xs bg-surface-container text-on-surface-variant hover:text-primary';
    btnActuales.setAttribute('aria-selected', 'false');

    contentHistorial.classList.remove('hidden');
    contentHistorial.classList.add('flex');
    contentActuales.classList.add('hidden');
    contentActuales.classList.remove('flex');
  }
}

// Mostrar avisos flotantes (Toast)
function showToast(title, message, isError = false) {
  const toast = document.getElementById('action-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');
  const iconWrapper = document.getElementById('toast-icon-wrapper');

  toastTitle.textContent = title;
  toastMsg.textContent = message;

  if (isError) {
    iconWrapper.className = 'w-9 h-9 rounded-md bg-error flex items-center justify-center shrink-0';
    toastIcon.className = 'material-symbols-outlined text-on-error text-[20px]';
    toastIcon.textContent = 'warning';
  } else {
    iconWrapper.className = 'w-9 h-9 rounded-md bg-primary-container flex items-center justify-center shrink-0';
    toastIcon.className = 'material-symbols-outlined text-on-primary-fixed text-[20px]';
    toastIcon.textContent = 'check';
  }

  toast.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3800);
}

// Manejador de acciones en libros
function handleAction(type, bookTitle) {
  if (type === 'renovar') {
    showToast('Préstamo Renovado', `Has renovado "${bookTitle}" por 14 días adicionales.`);
  } else if (type === 'devolver') {
    showToast('Devolución en Proceso', `Generado código QR para buzón de entrega de "${bookTitle}".`, true);
  } else if (type === 'ficha') {
    showToast('Ficha de Catálogo', `Consultando disponibilidad bibliográfica de "${bookTitle}".`);
  } else if (type === 're-pedir') {
    showToast('Solicitud Agregada', `"${bookTitle}" se ha reservado para retiro.`);
  }
}

// Cambiar entre las pestañas "Mi Perfil Cívico" y "Comunidad SaBré"
function switchMainTab(tab) {
  const btnPerfil = document.getElementById('tab-btn-perfil');
  const btnComunidad = document.getElementById('tab-btn-comunidad');
  const viewPerfil = document.getElementById('view-perfil');
  const viewComunidad = document.getElementById('view-comunidad');

  if (tab === 'perfil') {
    btnPerfil.classList.add('bg-primary-container', 'text-on-primary-fixed');
    btnPerfil.classList.remove('bg-surface-container', 'text-on-surface-variant');

    btnComunidad.classList.add('bg-surface-container', 'text-on-surface-variant');
    btnComunidad.classList.remove('bg-primary-container', 'text-on-primary-fixed');

    viewPerfil.classList.remove('hidden');
    viewComunidad.classList.add('hidden');
  } else {
    btnComunidad.classList.add('bg-primary-container', 'text-on-primary-fixed');
    btnComunidad.classList.remove('bg-surface-container', 'text-on-surface-variant');

    btnPerfil.classList.add('bg-surface-container', 'text-on-surface-variant');
    btnPerfil.classList.remove('bg-primary-container', 'text-on-primary-fixed');

    viewComunidad.classList.remove('hidden');
    viewPerfil.classList.add('hidden');
  }
}

// Editar alias comunitario
function editarAliasPrompt() {
  const aliasActual = document.getElementById('display-alias').textContent;
  const nuevoAlias = prompt('Ingresá tu nuevo alias comunitario:', aliasActual);

  if (nuevoAlias && nuevoAlias.trim() !== '') {
    const aliasLimpio = nuevoAlias.trim();

    document.getElementById('display-alias').textContent = aliasLimpio;
    document.getElementById('alias-firma').textContent = aliasLimpio;

    showProfileToast('Alias Comunitario actualizado correctamente');
  }
}

// Mensaje de confirmación para la pantalla de Perfil
function showProfileToast(mensaje) {
  const toast = document.getElementById('profile-toast');
  const toastMsg = document.getElementById('toast-msg');

  toastMsg.textContent = mensaje;

  toast.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 4500);
}

function enviarSugerencia(e) {
  e.preventDefault();
  const texto = document.getElementById('texto-propuesta').value;

  if (texto.trim()) {
    document.getElementById('sugerencia-form').reset();
    showProfileToast('¡Gracias! Tu propuesta comunitaria fue recibida con éxito.');
  }
}


function enviarSugerencia(e) {
  e.preventDefault();
  const texto = document.getElementById('texto-propuesta').value;

  if (texto.trim()) {
    document.getElementById('sugerencia-form').reset();
    showProfileToast('¡Gracias! Tu propuesta comunitaria fue recibida con éxito.');
  }
}
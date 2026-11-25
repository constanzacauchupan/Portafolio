const $ = (id) => document.getElementById(id);
const crear = (tag, clase, texto) => {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
};
const etiquetas = (lista) => {
  const ul = crear("ul", "etiquetas");
  lista.forEach((t) => ul.append(crear("li", "", t)));
  return ul;
};
const enlaceExterno = (url, texto, clase) => {
  const a = crear("a", clase, texto);
  a.href = url; a.target = "_blank"; a.rel = "noopener";
  return a;
};
const marcoCon = (p) => {
  const marco = crear("div", "marco");
  const img = crear("img");
  img.src = p.imagen; img.alt = p.alt || "";
  marco.append(img);
  return marco;
};

/* ---------- Proyectos ---------- */
PROYECTOS.forEach((p) => {
  const tarjeta = crear("article", "proyecto");
  const cuerpo = crear("div", "cuerpo");
  const h3 = crear("h3");
  const boton = crear("button", "abrir", p.titulo);
  boton.type = "button";
  boton.addEventListener("click", () => abrirDetalle(p));
  h3.append(boton);
  cuerpo.append(crear("p", "meta", [p.rol, p.fecha].filter(Boolean).join(" · ")), h3, crear("p", "", p.resumen));
  if (p.premio) cuerpo.append(crear("p", "premio", p.premio));
  cuerpo.append(etiquetas(p.tecnologias.slice(0, 5)));
  tarjeta.append(marcoCon(p), cuerpo);
  $("lista-proyectos").append(tarjeta);
});

OTROS.forEach((p) => {
  const li = crear("li");
  const texto = crear("div");
  texto.append(enlaceExterno(p.url, p.titulo, "otro-enlace"), crear("p", "", p.resumen));
  li.append(texto, etiquetas(p.tecnologias));
  $("lista-otros").append(li);
});

/* ---------- Detalle ---------- */
const detalle = $("detalle");
function abrirDetalle(p) {
  const cerrar = crear("button", "cerrar", "Cerrar");
  cerrar.type = "button";
  cerrar.addEventListener("click", () => detalle.close());

  const caja = crear("div", "detalle-cuerpo");
  const h2 = crear("h2", "", p.titulo);
  h2.id = "d-titulo";
  caja.append(crear("p", "meta", [p.rol, p.fecha].filter(Boolean).join(" · ")), h2);
  if (p.premio) caja.append(crear("p", "premio", p.premio));
  caja.append(crear("p", "", p.contexto), crear("h3", "", p.tituloAportes || "Lo que hice"));
  const ul = crear("ul", "aportes");
  p.aportes.forEach((a) => ul.append(crear("li", "", a)));
  caja.append(ul, etiquetas(p.tecnologias));
  if (p.enlaces) {
    const fila = crear("div", "botones");
    p.enlaces.forEach((e, i) => fila.append(enlaceExterno(e.url, e.texto, i ? "boton suave" : "boton")));
    caja.append(fila);
  }
  const barra = crear("div", "detalle-barra");
  barra.append(cerrar);
  detalle.replaceChildren(barra, marcoCon(p), caja);
  detalle.showModal();
  detalle.scrollTop = 0;
}
detalle.addEventListener("click", (e) => { if (e.target === detalle) detalle.close(); });

/* ---------- Tablero: la nota se arrastra o se mueve con clic / Enter ---------- */
const nota = $("nota-practica");
const columnas = [...document.querySelectorAll(".columna")];
const mensajes = [
  ["Muéveme a En curso", "Estoy buscando práctica profesional.", "Conversemos"],
  ["¡Empecemos!", "Esto es justo lo que busco.", "Escríbeme"],
  ["Todavía no, pero pronto", "Ojalá lleguemos a esta columna.", "Conversemos"]
];
function moverA(i) {
  columnas[i].append(nota);
  const [pista, frase, accion] = mensajes[i];
  $("nota-pista").textContent = pista;
  const a = crear("a", "", accion);
  a.href = "#contacto";
  $("aviso").replaceChildren(frase + " ", a);
}
const colActual = () => Number(nota.closest(".columna").dataset.col);
const columnaEn = (x, y) => columnas.find((c) => {
  const r = c.getBoundingClientRect();
  return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
});

let inicio = null, arrastrando = false, ignorarClic = false;
nota.addEventListener("pointerdown", (e) => {
  if (e.button) return;
  inicio = { x: e.clientX, y: e.clientY };
  arrastrando = false;
  ignorarClic = false;
  nota.setPointerCapture(e.pointerId);
});
nota.addEventListener("pointermove", (e) => {
  if (!inicio) return;
  const dx = e.clientX - inicio.x, dy = e.clientY - inicio.y;
  if (!arrastrando && Math.hypot(dx, dy) < 6) return;
  arrastrando = true;
  nota.classList.add("arrastrando");
  nota.style.transform = `translate(${dx}px, ${dy}px) rotate(2deg)`;
  const destino = columnaEn(e.clientX, e.clientY);
  columnas.forEach((c) => c.classList.toggle("destino", c === destino));
});
function soltar(e) {
  if (!inicio) return;
  const destino = e.type === "pointerup" && arrastrando ? columnaEn(e.clientX, e.clientY) : null;
  ignorarClic = arrastrando;
  inicio = null; arrastrando = false;
  nota.classList.remove("arrastrando");
  nota.style.transform = "";
  columnas.forEach((c) => c.classList.remove("destino"));
  if (destino) moverA(Number(destino.dataset.col));
}
nota.addEventListener("pointerup", soltar);
nota.addEventListener("pointercancel", soltar);
nota.addEventListener("click", (e) => {
  if (ignorarClic && e.detail) { ignorarClic = false; return; }
  ignorarClic = false;
  moverA((colActual() + 1) % 3);
  nota.focus({ preventScroll: true });
});

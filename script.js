document.addEventListener("DOMContentLoaded", () => {

  /* ===== CONFIG ===== */

  const videoFondoLocal = "media/videos/fondo.mp4";
  const audioFondo = "media/audio/fondo.mp3";

  const libreria = {
    oso: [
      { tipo: "video", src: "media/videos/oso1.mp4" },
      { tipo: "video", src: "media/videos/oso2.mp4" },
      { tipo: "video", src: "media/videos/oso3.mp4" },
      { tipo: "video", src: "media/videos/oso4.mp4" },
      { tipo: "video", src: "media/videos/oso5.mp4" },
      { tipo: "video", src: "media/videos/oso6.mp4" },
      { tipo: "video", src: "media/videos/oso7.mp4" },
      { tipo: "video", src: "media/videos/oso8.mp4" },
      { tipo: "video", src: "media/videos/oso9.mp4" },
      { tipo: "video", src: "media/videos/oso10.mp4"},
      { tipo: "video", src: "media/videos/oso11.mp4"},      
      { tipo: "video", src: "media/videos/oso12.mp4"},
      { tipo: "video", src: "media/videos/oso13.mp4"},      
      { tipo: "video", src: "media/videos/oso15.mp4"},
      { tipo: "video", src: "media/videos/oso16.mp4" },
      { tipo: "video", src: "media/videos/oso17.mp4"},
      { tipo: "video", src: "media/videos/oso18.mp4"},      
      { tipo: "video", src: "media/videos/oso19.mp4"},
      { tipo: "video", src: "media/videos/oso20.mp4"},      
      { tipo: "video", src: "media/videos/oso21.mp4"},
      { tipo: "video", src: "media/videos/oso23.mp4"},      
      { tipo: "video", src: "media/videos/oso24.mp4"},
      { tipo: "video", src: "media/videos/oso25.mp4"},
      { tipo: "video", src: "media/videos/oso26.mp4" },
      { tipo: "video", src: "media/videos/oso27.mp4"},
      { tipo: "video", src: "media/videos/oso28.mp4"},      
      { tipo: "video", src: "media/videos/oso29.mp4"},
      { tipo: "video", src: "media/videos/oso30.mp4"},      
      { tipo: "video", src: "media/videos/oso31.mp4"},
      { tipo: "video", src: "media/videos/oso33.mp4"},      
      { tipo: "video", src: "media/videos/oso34.mp4"},
      { tipo: "video", src: "media/videos/oso35.mp4"},
      { tipo: "video", src: "media/videos/oso22.mp4" },
      { tipo: "video", src: "media/videos/oso32.mp4"}];

 gato: [{ tipo: "video", src: "media/videos/gato1.mp4" },
{ tipo: "video", src: "media/videos/gato2.mp4" },
{ tipo: "video", src: "media/videos/gato3.mp4" },
{ tipo: "video", src: "media/videos/gato4.mp4" },
{ tipo: "video", src: "media/videos/gato5.mp4" },
{ tipo: "video", src: "media/videos/gato6.mp4" },
{ tipo: "video", src: "media/videos/gato7.mp4" },
{ tipo: "video", src: "media/videos/gato8.mp4" },
{ tipo: "video", src: "media/videos/gato9.mp4" },
{ tipo: "video", src: "media/videos/gato10.mp4" },
{ tipo: "video", src: "media/videos/gato11.mp4" },
{ tipo: "video", src: "media/videos/gato12.mp4" },
{ tipo: "video", src: "media/videos/gato13.mp4" },
{ tipo: "video", src: "media/videos/gato14.mp4" },
{ tipo: "video", src: "media/videos/gato15.mp4" },
{ tipo: "video", src: "media/videos/gato16.mp4" },
{ tipo: "video", src: "media/videos/gato17.mp4" },
{ tipo: "video", src: "media/videos/gato18.mp4" },
{ tipo: "video", src: "media/videos/gato19.mp4" },
{ tipo: "video", src: "media/videos/gato20.mp4" },
{ tipo: "video", src: "media/videos/gato21.mp4" },
{ tipo: "video", src: "media/videos/gato22.mp4" },
{ tipo: "video", src: "media/videos/gato23.mp4" },
{ tipo: "video", src: "media/videos/gato24.mp4" },
{ tipo: "video", src: "media/videos/gato25.mp4" },
{ tipo: "video", src: "media/videos/gato26.mp4" },
{ tipo: "video", src: "media/videos/gato27.mp4" },
{ tipo: "video", src: "media/videos/gato28.mp4" },
{ tipo: "video", src: "media/videos/gato29.mp4" },
{ tipo: "video", src: "media/videos/gato30.mp4" },
{ tipo: "video", src: "media/videos/gato31.mp4" },
{ tipo: "video", src: "media/videos/gato32.mp4" },
{ tipo: "video", src: "media/videos/gato33.mp4" },
{ tipo: "img", src: "media/img/1.jpg" },
{ tipo: "img", src: "media/img/2.jpg" },
{ tipo: "img", src: "media/img/3.jpg" },
{ tipo: "img", src: "media/img/4.jpg" },
{ tipo: "img", src: "media/img/5.jpg" },
{ tipo: "img", src: "media/img/6.jpg" },
{ tipo: "img", src: "media/img/7.jpg" },
{ tipo: "img", src: "media/img/8.jpg" },
{ tipo: "img", src: "media/img/9.jpg" },
{ tipo: "img", src: "media/img/10.jpg" },
{ tipo: "img", src: "media/img/11.jpg" },
{ tipo: "img", src: "media/img/12.jpg" },
{ tipo: "img", src: "media/img/13.jpg" },
{ tipo: "img", src: "media/img/14.jpg" },
{ tipo: "img", src: "media/img/15.jpg" },
{ tipo: "img", src: "media/img/16.jpg" }
];

lince :[{ tipo: "video", src: "media/videos/lince1.mp4" },
{ tipo: "video", src: "media/videos/lince2.mp4" },
{ tipo: "video", src: "media/videos/lince3.mp4" },
{ tipo: "video", src: "media/videos/lince4.mp4" },
{ tipo: "video", src: "media/videos/lince5.mp4" },
{ tipo: "video", src: "media/videos/lince6.mp4" },
{ tipo: "video", src: "media/videos/lince7.mp4" },
{ tipo: "video", src: "media/videos/lince8.mp4" },
{ tipo: "video", src: "media/videos/lince9.mp4" },
{ tipo: "video", src: "media/videos/lince10.mp4" },
{ tipo: "video", src: "media/videos/lince11.mp4" },
{ tipo: "video", src: "media/videos/lince12.mp4" },
{ tipo: "video", src: "media/videos/lince13.mp4" },
{ tipo: "video", src: "media/videos/lince14.mp4" },
{ tipo: "video", src: "media/videos/lince15.mp4" },
{ tipo: "video", src: "media/videos/lince16.mp4" },
{ tipo: "video", src: "media/videos/lince17.mp4" },
{ tipo: "video", src: "media/videos/lince18.mp4" },
{ tipo: "video", src: "media/videos/lince19.mp4" },
{ tipo: "video", src: "media/videos/lince20.mp4" },
{ tipo: "img", src: "media/img/101.jpg" },
{ tipo: "img", src: "media/img/102.jpg" },
{ tipo: "img", src: "media/img/103.jpg" },
{ tipo: "img", src: "media/img/104.jpg" },
{ tipo: "img", src: "media/img/105.jpg" },
{ tipo: "img", src: "media/img/106.jpg" },
{ tipo: "img", src: "media/img/107.jpg" },
{ tipo: "img", src: "media/img/108.jpg" },
{ tipo: "img", src: "media/img/109.jpg" },
{ tipo: "img", src: "media/img/110.jpg" },
{ tipo: "img", src: "media/img/111.jpg" },
{ tipo: "img", src: "media/img/112.jpg" },
{ tipo: "img", src: "media/img/113.jpg" },
{ tipo: "img", src: "media/img/114.jpg" },
{ tipo: "img", src: "media/img/115.jpg" },
{ tipo: "img", src: "media/img/116.jpg" },
{ tipo: "img", src: "media/img/117.jpg" },
{ tipo: "img", src: "media/img/118.jpg" },
{ tipo: "img", src: "media/img/119.jpg" },
{ tipo: "img", src: "media/img/120.jpg" },
{ tipo: "img", src: "media/img/121.jpg" },
{ tipo: "img", src: "media/img/122.jpg" },
{ tipo: "img", src: "media/img/123.jpg" },
{ tipo: "img", src: "media/img/124.jpg" },
{ tipo: "img", src: "media/img/125.jpg" },
{ tipo: "img", src: "media/img/126.jpg" },
{ tipo: "img", src: "media/img/127.jpg" },
{ tipo: "img", src: "media/img/128.jpg" },
{ tipo: "img", src: "media/img/129.jpg" },
{ tipo: "img", src: "media/img/130.jpg" },
{ tipo: "img", src: "media/img/131.jpg" },
{ tipo: "img", src: "media/img/132.jpg" },
{ tipo: "img", src: "media/img/133.jpg" },
{ tipo: "img", src: "media/img/134.jpg" },
{ tipo: "img", src: "media/img/135.jpg" },
{ tipo: "img", src: "media/img/136.jpg" },
{ tipo: "img", src: "media/img/137.jpg" },
{ tipo: "img", src: "media/img/138.jpg" },
{ tipo: "img", src: "media/img/139.jpg" },
{ tipo: "img", src: "media/img/140.jpg" },
{ tipo: "img", src: "media/img/141.jpg" },
{ tipo: "img", src: "media/img/142.jpg" },
{ tipo: "img", src: "media/img/143.jpg" },
{ tipo: "img", src: "media/img/144.jpg" },
{ tipo: "img", src: "media/img/145.jpg" },
{ tipo: "img", src: "media/img/146.jpg" },
{ tipo: "img", src: "media/img/147.jpg" },
{ tipo: "img", src: "media/img/148.jpg" },
{ tipo: "img", src: "media/img/149.jpg" },
{ tipo: "img", src: "media/img/150.jpg" },
{ tipo: "img", src: "media/img/151.jpg" },
{ tipo: "img", src: "media/img/152.jpg" },
{ tipo: "img", src: "media/img/153.jpg" },
{ tipo: "img", src: "media/img/154.jpg" },
{ tipo: "img", src: "media/img/155.jpg" },
{ tipo: "img", src: "media/img/156.jpg" },
{ tipo: "img", src: "media/img/157.jpg" },
{ tipo: "img", src: "media/img/158.jpg" },
{ tipo: "img", src: "media/img/159.jpg" },
{ tipo: "img", src: "media/img/160.jpg" },
{ tipo: "img", src: "media/img/161.jpg" },
{ tipo: "img", src: "media/img/162.jpg" },
{ tipo: "img", src: "media/img/163.jpg" },
{ tipo: "img", src: "media/img/164.jpg" },
{ tipo: "img", src: "media/img/165.jpg" },
{ tipo: "img", src: "media/img/166.jpg" },
{ tipo: "img", src: "media/img/167.jpg" },
{ tipo: "img", src: "media/img/168.jpg" },
{ tipo: "img", src: "media/img/169.jpg" },
{ tipo: "img", src: "media/img/170.jpg" },
{ tipo: "img", src: "media/img/171.jpg" },
{ tipo: "img", src: "media/img/172.jpg" },
{ tipo: "img", src: "media/img/173.jpg" },
{ tipo: "img", src: "media/img/174.jpg" },
{ tipo: "img", src: "media/img/175.jpg" },
{ tipo: "img", src: "media/img/176.jpg" },
{ tipo: "img", src: "media/img/177.jpg" },
{ tipo: "img", src: "media/img/178.jpg" },
{ tipo: "img", src: "media/img/179.jpg" },
{ tipo: "img", src: "media/img/180.jpg" },
{ tipo: "img", src: "media/img/181.jpg" },
{ tipo: "img", src: "media/img/182.jpg" },
{ tipo: "img", src: "media/img/183.jpg" },
{ tipo: "img", src: "media/img/184.jpg" },
{ tipo: "img", src: "media/img/185.jpg" },
{ tipo: "img", src: "media/img/186.jpg" },
{ tipo: "img", src: "media/img/187.jpg" },
{ tipo: "img", src: "media/img/188.jpg" },
{ tipo: "img", src: "media/img/189.jpg" },
{ tipo: "img", src: "media/img/190.jpg" },
{ tipo: "img", src: "media/img/191.jpg" },
{ tipo: "img", src: "media/img/192.jpg" },
{ tipo: "img", src: "media/img/193.jpg" },
{ tipo: "img", src: "media/img/194.jpg" },
{ tipo: "img", src: "media/img/195.jpg" },
{ tipo: "img", src: "media/img/196.jpg" },
{ tipo: "img", src: "media/img/197.jpg" },
{ tipo: "img", src: "media/img/198.jpg" },
{ tipo: "img", src: "media/img/199.jpg" },
{ tipo: "img", src: "media/img/200.jpg" },
{ tipo: "img", src: "media/img/201.jpg" },
{ tipo: "img", src: "media/img/202.jpg" },
{ tipo: "img", src: "media/img/203.jpg" },
{ tipo: "img", src: "media/img/204.jpg" },
{ tipo: "img", src: "media/img/205.jpg" },
{ tipo: "img", src: "media/img/206.jpg" },
{ tipo: "img", src: "media/img/207.jpg" },
{ tipo: "img", src: "media/img/208.jpg" },
{ tipo: "img", src: "media/img/209.jpg" },
{ tipo: "img", src: "media/img/210.jpg" },
{ tipo: "img", src: "media/img/211.jpg" },
{ tipo: "img", src: "media/img/212.jpg" },
{ tipo: "img", src: "media/img/213.jpg" },
{ tipo: "img", src: "media/img/214.jpg" },
{ tipo: "img", src: "media/img/215.jpg" },
{ tipo: "img", src: "media/img/216.jpg" },
{ tipo: "img", src: "media/img/217.jpg" },
{ tipo: "img", src: "media/img/218.jpg" },
{ tipo: "img", src: "media/img/219.jpg" },
{ tipo: "img", src: "media/img/220.jpg" },
{ tipo: "img", src: "media/img/221.jpg" },
{ tipo: "img", src: "media/img/222.jpg" },
{ tipo: "img", src: "media/img/223.jpg" },
{ tipo: "img", src: "media/img/224.jpg" },
{ tipo: "img", src: "media/img/225.jpg" },
{ tipo: "img", src: "media/img/226.jpg" },
{ tipo: "img", src: "media/img/227.jpg" },
{ tipo: "img", src: "media/img/228.jpg" },
{ tipo: "img", src: "media/img/229.jpg" },
{ tipo: "img", src: "media/img/230.jpg" },
{ tipo: "img", src: "media/img/231.jpg" },
{ tipo: "img", src: "media/img/232.jpg" },
{ tipo: "img", src: "media/img/233.jpg" },
{ tipo: "img", src: "media/img/234.jpg" },
{ tipo: "img", src: "media/img/235.jpg" },
{ tipo: "img", src: "media/img/236.jpg" },
{ tipo: "img", src: "media/img/237.jpg" },
{ tipo: "img", src: "media/img/238.jpg" },
{ tipo: "img", src: "media/img/239.jpg" },
{ tipo: "img", src: "media/img/240.jpg" },
{ tipo: "img", src: "media/img/241.jpg" },
{ tipo: "img", src: "media/img/242.jpg" }
]}


  /* ===== ESTADO ===== */
let categoriaActual = null;
let primeraVez = true;
let zIndex = 10;
let popupsActivos = []; 

  /* ===== ELEMENTOS ===== */
  const selector = document.getElementById("selector");
  const main = document.getElementById("main");
  const btn = document.getElementById("openBtn");
  const popupZone = document.getElementById("popupZone");
  const bgVideo = document.getElementById("bgVideo");
  const bgWrap = document.getElementById("videoBackground");
  const bgAudio = document.getElementById("bgAudio");

  /* ===== SELECCIÓN ===== */
document.querySelectorAll(".selector-btn").forEach(b => {
  b.addEventListener("click", () => {

    categoriaActual = b.dataset.cat;

    /* 🔓 DESBLOQUEO GLOBAL DE MEDIA (MÓVIL) */
    bgVideo.src = "media/videos/fondo.mp4"; // LOCAL
    bgVideo.muted = true;
    bgVideo.play().catch(()=>{});

    bgAudio.src = "media/audio/fondo.mp3";
    bgAudio.muted = true;
    bgAudio.play().catch(()=>{});

    /* UI */
    selector.style.display = "none";
    main.style.display = "flex";
  });
});


  /* ===== POPUPS ===== */
btn.addEventListener("click", () => {

    if (!categoriaActual || !libreria[categoriaActual]) return;

    if (primeraVez) {
        bgWrap.style.opacity = "1";
        bgVideo.muted = false;
        bgAudio.muted = false;
        // En móviles, play() debe llamarse inmediatamente en el click
        bgVideo.play().catch(e => console.log("Error video:", e));
        bgAudio.play().catch(e => console.log("Error audio:", e));
        btn.classList.add("dim"); 
        primeraVez = false;
    }
  if (popupsActivos.length >= 4) {
        const viejo = popupsActivos.shift(); // Saca el primero de la lista (el más antiguo)
        if (viejo) viejo.remove(); // Lo elimina del DOM
    }
    const lista = libreria[categoriaActual];
    const elegido = lista[Math.floor(Math.random() * lista.length)];

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.zIndex = ++zIndex;

    // --- CÁLCULO DE POSICIÓN RESPONSIVO ---
const isMobile = window.innerWidth < 600;

const popupWidth = isMobile
  ? window.innerWidth * 0.51
  : 380;

const popupHeight = isMobile
  ? window.innerHeight * 0.39
  : 560;

/* Aplicar tamaño REAL al popup */
popup.style.width = popupWidth + "px";
popup.style.height = popupHeight + "px";


    let x = Math.random() * (window.innerWidth - popupWidth);
    let y = Math.random() * (window.innerHeight - popupHeight);

    // Evitar que aparezca fuera de los bordes
    x = Math.max(10, Math.min(x, window.innerWidth - popupWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - popupHeight - 10));

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    popup.innerHTML = `<span class="close">&times;</span>`;

let mediaElement;

if (elegido.tipo === "video") {

  const video = document.createElement("video");
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.setAttribute("webkit-playsinline", "true");
  video.src = elegido.src;

  mediaElement = video;

} else if (elegido.tipo === "img") {

  const img = document.createElement("img");
  img.src = elegido.src;
  img.alt = "popup image";

  mediaElement = img;
}

popup.appendChild(mediaElement);


    popup.querySelector(".close").onclick = e => {
        e.stopPropagation();
popupsActivos = popupsActivos.filter(p => p !== popup);
        popup.remove();
    };

    popupZone.appendChild(popup);
popupsActivos.push(popup);
});





});


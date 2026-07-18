document.addEventListener("DOMContentLoaded", () => {

  /* ===== CONFIG ===== */

  const videoFondoLocal = "media/videos/fondo.mp4";
  const audioFondo = "media/audio/fondo.mp3";

  const libreria = {    oso: [
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
      { tipo: "video", src: "media/videos/oso32.mp4"}],
                   
       gato: [
{ tipo: "video", src: "media/videos/gato1.mp4" },
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
{ tipo: "img", src: "media/img/16.jpg" },
       ],

lince: [
{ tipo: "video", src: "media/videos/lince1.mp4" },
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
{ tipo: "img", src: "media/img/104.jpeg" },
{ tipo: "img", src: "media/img/105.jpeg" },
{ tipo: "img", src: "media/img/106.jpeg" },
{ tipo: "img", src: "media/img/107.jpeg" },
{ tipo: "img", src: "media/img/108.jpeg" },
{ tipo: "img", src: "media/img/109.jpeg" },
{ tipo: "img", src: "media/img/110.jpeg" },
{ tipo: "img", src: "media/img/111.jpeg" },
{ tipo: "img", src: "media/img/112.jpeg" },
{ tipo: "img", src: "media/img/113.jpeg" },
{ tipo: "img", src: "media/img/114.jpeg" },
{ tipo: "img", src: "media/img/115.jpeg" },
{ tipo: "img", src: "media/img/116.jpeg" },
{ tipo: "img", src: "media/img/117.jpeg" },
{ tipo: "img", src: "media/img/118.jpeg" },
{ tipo: "img", src: "media/img/119.jpeg" },
{ tipo: "img", src: "media/img/120.jpeg" },
{ tipo: "img", src: "media/img/121.jpeg" },
{ tipo: "img", src: "media/img/122.jpeg" },
{ tipo: "img", src: "media/img/123.jpeg" },
{ tipo: "img", src: "media/img/124.jpeg" },
{ tipo: "img", src: "media/img/125.jpeg" },
{ tipo: "img", src: "media/img/126.jpeg" },
{ tipo: "img", src: "media/img/127.jpeg" },
{ tipo: "img", src: "media/img/128.jpeg" },
{ tipo: "img", src: "media/img/129.jpeg" },
{ tipo: "img", src: "media/img/130.jpeg" },
{ tipo: "img", src: "media/img/131.jpeg" },
{ tipo: "img", src: "media/img/132.jpeg" },
{ tipo: "img", src: "media/img/133.jpeg" },
{ tipo: "img", src: "media/img/134.jpeg" },
{ tipo: "img", src: "media/img/135.jpeg" },
{ tipo: "img", src: "media/img/136.jpeg" },
{ tipo: "img", src: "media/img/137.jpeg" },
{ tipo: "img", src: "media/img/138.jpeg" },
{ tipo: "img", src: "media/img/139.jpeg" },
{ tipo: "img", src: "media/img/140.jpeg" },
{ tipo: "img", src: "media/img/141.jpeg" },
{ tipo: "img", src: "media/img/142.jpeg"},
{tipo: "img", src: "media/img/6257914942988161669.jpg"},
{tipo: "img", src: "media/img/6257914942988161670.jpg"},
{tipo: "img", src: "media/img/6257914942988161671.jpg"},
{tipo: "img", src: "media/img/6257914942988161672.jpg"},
{tipo: "img", src: "media/img/6257914942988161673.jpg"},
{tipo: "img", src: "media/img/6257914942988161674.jpg"},
{tipo: "img", src: "media/img/6257914942988161675.jpg"},
{tipo: "img", src: "media/img/6257914942988161676.jpg"},
{tipo: "img", src: "media/img/6257914942988161677.jpg"},
{tipo: "img", src: "media/img/6257914942988161678.jpg"},
{tipo: "img", src: "media/img/6257914942988161679.jpg"},
{tipo: "img", src: "media/img/6257914942988161680.jpg"},
{tipo: "img", src: "media/img/6257914942988161681.jpg"},
{tipo: "img", src: "media/img/6257914942988161682.jpg"},
{tipo: "img", src: "media/img/6257914942988161683.jpg"},
{tipo: "img", src: "media/img/6257914942988161684.jpg"},
{tipo: "img", src: "media/img/6257914942988161685.jpg"},
{tipo: "img", src: "media/img/6257914942988161686.jpg"},
{tipo: "img", src: "media/img/6257914942988161687.jpg"},
{tipo: "img", src: "media/img/6257914942988161688.jpg"},
{tipo: "img", src: "media/img/6257914942988161689.jpg"},
{tipo: "img", src: "media/img/6257914942988161691.jpg"},
{tipo: "img", src: "media/img/6257914942988161692.jpg"},
{tipo: "img", src: "media/img/6257914942988161693.jpg"},
{tipo: "img", src: "media/img/6257914942988161694.jpg"},
{tipo: "img", src: "media/img/6257914942988161695.jpg"},
{tipo: "img", src: "media/img/6257914942988161696.jpg"},
{tipo: "img", src: "media/img/6257914942988161697.jpg"},
{tipo: "img", src: "media/img/6257914942988161698.jpg"},
{tipo: "img", src: "media/img/6257914942988161699.jpg"},
{tipo: "img", src: "media/img/6257914942988161700.jpg"},
{tipo: "img", src: "media/img/6257914942988161701.jpg"},
{tipo: "img", src: "media/img/6257914942988161702.jpg"},
{tipo: "img", src: "media/img/6257914942988161703.jpg"},
{tipo: "img", src: "media/img/6257914942988161704.jpg"},
{tipo: "img", src: "media/img/6257914942988161705.jpg"},
{tipo: "img", src: "media/img/6257914942988161706.jpg"},
{tipo: "img", src: "media/img/6257914942988161707.jpg"},
{tipo: "img", src: "media/img/6257914942988161708.jpg"},
{tipo: "img", src: "media/img/6257914942988161709.jpg"},
{tipo: "img", src: "media/img/6257914942988161710.jpg"},
{tipo: "img", src: "media/img/6257914942988161711.jpg"},
{tipo: "img", src: "media/img/6257914942988161712.jpg"},
{tipo: "img", src: "media/img/6257914942988161713.jpg"},
{tipo: "img", src: "media/img/6257914942988161714.jpg"},
{tipo: "img", src: "media/img/6257914942988161715.jpg"},
{tipo: "img", src: "media/img/6257914942988161716.jpg"},
{tipo: "img", src: "media/img/6257914942988161717.jpg"},
{tipo: "img", src: "media/img/6257914942988161718.jpg"},
{tipo: "img", src: "media/img/6257914942988161719.jpg"},
{tipo: "img", src: "media/img/6257914942988161720.jpg"},
{tipo: "img", src: "media/img/6257914942988161721.jpg"},
{tipo: "img", src: "media/img/6257914942988161722.jpg"},
{tipo: "img", src: "media/img/6257914942988161723.jpg"},
{tipo: "img", src: "media/img/6257914942988161724.jpg"},
{tipo: "img", src: "media/img/6257914942988161725.jpg"},
{tipo: "img", src: "media/img/6257914942988161726.jpg"},
{tipo: "img", src: "media/img/6257914942988161727.jpg"},
{tipo: "img", src: "media/img/6257914942988161728.jpg"},
{tipo: "img", src: "media/img/6257914942988161729.jpg"},
{tipo: "img", src: "media/img/6257914942988161730.jpg"},
{tipo: "img", src: "media/img/6257914942988161731.jpg"},
{tipo: "img", src: "media/img/6257914942988161733.jpg"},
{tipo: "img", src: "media/img/6257914942988161734.jpg"},
{tipo: "img", src: "media/img/6257914942988161735.jpg"},
{tipo: "img", src: "media/img/6257914942988161736.jpg"},
{tipo: "img", src: "media/img/6257914942988161737.jpg"},
{tipo: "img", src: "media/img/6257914942988161738.jpg"},
{tipo: "img", src: "media/img/6257914942988161739.jpg"},
{tipo: "img", src: "media/img/6257914942988161740.jpg"},
{tipo: "img", src: "media/img/6257914942988161741.jpg"},
{tipo: "img", src: "media/img/6257914942988161742.jpg"},
{tipo: "img", src: "media/img/6257914942988161743.jpg"},
{tipo: "video", src: "media/videos/video6257914942528168679.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168680.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168681.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168682.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168683.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168684.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168685.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168686.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168687.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168688.mp4"},
{tipo: "video", src: "media/videos/video6257914942528168689.mp4"},
{tipo: "img", src: "media/img/6257914942988161667.jpg"},
{tipo: "img", src: "media/img/6257914942988161668.jpg"}
],
perro: [
      { tipo: "video", src: "media/videos/perro1.mp4" },
      { tipo: "video", src: "media/videos/perro2.mp4" },
      { tipo: "video", src: "media/videos/perro3.mp4" },
      { tipo: "video", src: "media/videos/perro4.mp4" },
      { tipo: "video", src: "media/videos/perro5.mp4" },
      { tipo: "video", src: "media/videos/perro6.mp4" },
      { tipo: "video", src: "media/videos/perro7.mp4" },
      { tipo: "video", src: "media/videos/perro8.mp4" },
      { tipo: "video", src: "media/videos/perro9.mp4" },
      { tipo: "video", src: "media/videos/perro10.mp4"},
      { tipo: "video", src: "media/videos/perro11.mp4"},      
      { tipo: "video", src: "media/videos/perro12.mp4"},
      { tipo: "video", src: "media/videos/perro13.mp4"},      
      { tipo: "video", src: "media/videos/perro14.mp4"},
      { tipo: "video", src: "media/videos/perro15.mp4" },
      { tipo: "video", src: "media/videos/perro16.mp4"},
      { tipo: "video", src: "media/videos/perro17.mp4"},      
      { tipo: "video", src: "media/videos/perro18.mp4"},
      { tipo: "video", src: "media/videos/perro19.mp4"},      
      { tipo: "video", src: "media/videos/perro20.mp4"},
      { tipo: "video", src: "media/videos/perro21.mp4"},      
      { tipo: "video", src: "media/videos/perro22.mp4"},
      { tipo: "video", src: "media/videos/perro23.mp4"},
      { tipo: "video", src: "media/videos/oso26.mp4" }]
                   
                   }




    


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





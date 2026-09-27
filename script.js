const testimonials=[

{
name:"Donovan Simon",
role:"President of Jamaican-Canadian Association Alberta",
text:"Dr Unati is an amazing and a true professional. I wish every male in our community gets a chance to benefit from what Dr Unati is doing. It is refreshing, revolutionary and relevant to our men, no matter their age, stage or culture. I have found her sessions to be real, caring and filled with a passion that is engaging and contagious. From watching her programs it has also become very evident to me that so much has been missed by many of our health professionals, and ourselves, over the years. It is great that she has found within her to start to highlight these issues and bring them to us. Thanks for what you you do Dr. Unati. It is important and my hope is that it reaches the core of the males in our community. People are being helped and we are grateful for you taking the lead on shining the light in this area."

},

{
name:"Phumza Dyani, MBA, PMI-CP",
role:"Chief Marketing & Sales Officer - Broadband Infraco",
text:"We loved your work Dr. Unati! My team felt heard as you journeyed with them through their own challenges. It was such a cathartic experience!"
},

{
name:"Pastor Godlove",
role:"",
text:"The power of a sin or trauma over a person's life is secrecy or lack of an open conversation. The power is broken when it comes to light. That is the first step to freedom. Thanks Dr. Unati."
},

{
name:"Nwabisa",
role:"",
text:"Power of words from a parent! Thanks Doc. What a powerful presentation and wonderful speaker. Thank you."
},

{
name:"EAP Nigeria",
role:"",
text:"Our parents doing, our current realities. As parents or aspiring parents on this platform, we can do better by changing this narrative. Be more objective in our actions. Trauma is a key factor for emotional instability I appreciate you Dr Unati"
},

{
name:"Dr. Sola Olowookere",
role:"",
text:"Well done DR M Health Corner! EAP Nigeria is really looking forward to having you come share your knowledge with us again!!!"
}
];


const container=document.getElementById(
"testimonial-container"
);


if(container){

testimonials.forEach(item=>{

container.innerHTML +=`

<div class="testimonial">

<p>"${item.text}"</p>

<h4>${item.name}</h4>

<small>${item.role}</small>

</div>

`;

});

}


/* ═══════════════════════════════════════
   PHOTO GALLERY — placeholder fallback
   Drop a real photo into /images with the
   matching filename (gallery-01.jpg, etc.)
   and it will replace the placeholder
   automatically — no HTML edits needed.
═══════════════════════════════════════ */

document.querySelectorAll('.photo-item img').forEach((img, i) => {
  img.addEventListener('error', () => {
    const placeholder = document.createElement('div');
    placeholder.className = 'photo-placeholder';
    placeholder.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
      '<rect x="3" y="5" width="18" height="14" rx="2"/>' +
      '<circle cx="8.5" cy="10" r="1.5"/>' +
      '<path d="M4 16.5l5-5 3.5 3.5 3-3 4.5 4.5"/>' +
      '</svg>' +
      `<span>Photo ${i + 1}</span>`;
    img.replaceWith(placeholder);
  }, { once: true });
});


/* ═══════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════ */

const galleryItems   = document.querySelectorAll('.photo-item');
const lightbox        = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxCounter = document.getElementById('lightbox-counter');

let currentPhotoIndex = 0;

function updateLightbox() {
  const item = galleryItems[currentPhotoIndex];
  lightboxContent.innerHTML = item.innerHTML;
  lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${galleryItems.length}`;
}

function openLightbox(index) {
  currentPhotoIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

function showNextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % galleryItems.length;
  updateLightbox();
}

function showPrevPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightbox();
}

if (lightbox && galleryItems.length) {
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-next').addEventListener('click', showNextPhoto);
  document.getElementById('lightbox-prev').addEventListener('click', showPrevPhoto);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') showNextPhoto();
    if (e.key === 'ArrowLeft')  showPrevPhoto();
  });
}

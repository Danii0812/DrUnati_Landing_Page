const testimonials=[

{
name:"Donovan Simon",
role:"President of Jamaican-Canadian Association Alberta",
text:"Dr Unati is an amazing and a true professional. I wish every male in our community gets a chance to benefit from what Dr Unati is doing. It is refreshing, revolutionary and relevant to our men, no matter their age, stage or culture. I have found her sessions to be real, caring and filled with a passion that is engaging and contagious. From watching her programs it has also become very evident to me that so much has been missed by many of our health professionals, and ourselves, over the years. It is great that she has found within her to start to highlight these issues and bring them to us. Thanks for what you you do Dr. Unati. It is important and my hope is that it reaches the core of the males in our community. People are being helped and we are grateful for you taking the lead on shining the light in this area."

},

{
name:"Phumza Dyani, MBA, PMI-CP",
role:"Chief Marketing & Sales Officer - Broadband Infraco",
text:"We loved your work Dr. Unati, my team felt heard as you journeyed with them through their own challenges. It was such a cathartic experience!"
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
}

{
name:"@drsolowookere",
role:"",
text:"Well done DR M Health Corner! EAP Nigeria is really looking forward to having you come share your knowledge with us again!!"
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

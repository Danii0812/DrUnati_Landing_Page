const testimonials=[

{
name:"Sarah Johnson",
role:"Community Member",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},

{
name:"Michael Brown",
role:"Patient",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},

{
name:"Jennifer Smith",
role:"Health Advocate",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},

{
name:"David Wilson",
role:"Healthcare Professional",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},

{
name:"Ashley Davis",
role:"Community Member",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
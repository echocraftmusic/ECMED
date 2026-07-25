'use strict';
const menu=document.getElementById('mobileMenu');const rail=document.getElementById('sideRail');
menu?.addEventListener('click',()=>rail.classList.toggle('open'));
document.querySelectorAll('.side-nav a').forEach(a=>a.addEventListener('click',()=>rail.classList.remove('open')));
const reveals=document.querySelectorAll('.reveal');const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(el=>io.observe(el));
const links=[...document.querySelectorAll('.side-nav a')];const sections=[...document.querySelectorAll('main section[id]')];const stage=document.getElementById('scrollStage');
function setActive(){let current='home';sections.forEach(s=>{const r=s.getBoundingClientRect();if(r.top<180)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))}
stage?.addEventListener('scroll',setActive,{passive:true});window.addEventListener('scroll',setActive,{passive:true});

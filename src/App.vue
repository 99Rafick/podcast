
<template>
  <main class="w-screen relative object-cover h-screen" 
      style="background-image: url('https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
             background-size: cover;
             background-position: 50%;
      ;">
      <div class="w-full z-0 h-full absolute bg-black/60 backdrop-blur-2xl"></div>
      <div id="content" class="w-max z-10 pl-[15%] pr-[90%] bg-  sm:pl-[30%] sm:pr-[40%]  md:pl-[calc(50%-10rem)] gap-5 2xl:gap-6 md:pr-[calc(50%-8rem)] flex items-center justify-center relative h-full">
          <Card v-for="(card, index) in cards" 
                    :key="index"
                    ref="podcastCards" 
                    :name="card.name"
                    :image="card.image"
                    :color="card.color"
                    :number="index+1"
                    :active="card.active">
          </Card>

          
      </div>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = reactive([
  {color: 'bg-blue-900', name: 'Elea MILLER', active: false, image: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {color: 'bg-white', name: 'James CORNET', active: false, image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {color: 'bg-yellow-500', name: 'Amina GRAYCE', active: false, image: "https://images.pexels.com/photos/3187171/pexels-photo-3187171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {color: 'bg-stone-800', name: 'Gary BRAWN', active: false, image: "https://images.pexels.com/photos/2179241/pexels-photo-2179241.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  {color: 'bg-amber-900', name: "Madeline N'DOE", active: false, image: "https://images.pexels.com/photos/2180525/pexels-photo-2180525.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  {color: 'bg-yellow-600', name: 'Jocelyn MED', active: false, image: "https://images.pexels.com/photos/2006726/pexels-photo-2006726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  {color: 'bg-white', name: 'Aya KANTE', active: false, image: "https://images.pexels.com/photos/2301285/pexels-photo-2301285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  {color: 'bg-black', name: 'John DOE', active: false, image: "https://images.pexels.com/photos/2973552/pexels-photo-2973552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  {color: 'bg-teal-500', name: 'Maya JONES', active: false, image: "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
]);

onMounted(() => {
  const content = document.querySelector('#content');
  const podcastCards = ref([]);
  const main = document.querySelector('main')

  podcastCards.value = document.querySelectorAll('#content .card');

  gsap.to(content, {
    xPercent: -100,
    x: () => window.innerWidth,
    ease: 'none',
    scrollTrigger: {
      pin: 'main',
      trigger: 'main',
      start: 'left left',
      end: () => `+=${content.offsetWidth} top`,
      scrub: 1,
      // markers: true,
      onUpdate: () => {
        const midScreenX = window.innerWidth / 2;

        podcastCards.value.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + (cardRect.width / 2);
          
          const isActive = Math.abs(midScreenX - cardCenterX) < cardRect.width / 2;
          cards[index].active = isActive;
          
          if(isActive) {
             main.style.backgroundImage = `url('${cards[index].image}')`
          }
        });
      },
    },
  });
});
</script>

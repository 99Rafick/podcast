
<template>
  <main class="w-screen relative object-cover h-screen">
      <div id="content" class="w-max pl-[calc(50%-10rem)] pr-[calc(50%-8rem)] flex items-center justify-center relative h-full bg-slate-900">
          <PodcastCard v-for="(card, index) in cards" 
                    :key="index" 
                     ref="podcastCards" 
                    :active="card.active">
          </PodcastCard>
      </div>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import PodcastCard from '@/components/PodcastCard.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = reactive([
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
]);

onMounted(() => {
  const content = document.querySelector('#content');
  const podcastCards = ref([]);

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
      markers: true,
      onUpdate: () => {
        const midScreenX = window.innerWidth / 2;

        podcastCards.value.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + (cardRect.width / 2);

          cards[index].active = Math.abs(midScreenX - cardCenterX) < cardRect.width / 2;
        });
      },
    },
  });
});
</script>

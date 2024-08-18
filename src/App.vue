
<template>
  <main class="w-screen relative object-cover h-screen">
      <div id="content" class="w-[7000px] relative h-full bg-slate-900">
          <!-- <PodcastCard></PodcastCard>
          <PodcastCard></PodcastCard>
          <PodcastCard></PodcastCard>
          <PodcastCard></PodcastCard>
          <PodcastCard id="box1" :active="true"></PodcastCard>
          <PodcastCard></PodcastCard>
          <PodcastCard></PodcastCard>
          <PodcastCard></PodcastCard>
          <PodcastCard></PodcastCard> -->

          <div  class="box1 w-56 z-[3] absolute top-1/2 left-[1200px] -translate-y-1/2 h-56 bg-white"></div>
      </div>
  </main>
</template>

<script setup>
// import PodcastCard from '@/components/PodcastCard.vue'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from 'vue';


gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const content = document.querySelector('#content')


  let scrollTween = gsap.to(content, {
    xPercent: -100,
    x: () => window.innerWidth,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      pin: "main",
      trigger: "main",
      start: "left left",
      end: () => `+=${content.offsetWidth} bottom`,
      scrub: 1,
      markers: true,
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box1",
        start: "left 70%",
        end: "left 20%",
        scrub: 1,
        containerAnimation: scrollTween,
        markers: true
    },
});

tl.to(".box1", {
    rotation: 360,
    duration: 1
});
 


})
</script>

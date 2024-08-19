<template>
    <div class="relative h-max">
        <div :class="['h-[480px] w-[390px] transition duration-500 ease-out card z-1000 flex-none cursor-pointer rounded-3xl overflow-hidden relative', 
            {'scale-[0.75]': !active, 'bg-purple-600': active}
        ]">

            <img :class="['w-full h-full object-cover', {'grayscale': !active}]" :src="image" alt="">

        
            <div :class="['h-20 w-full  transition duration-300 ease-in-out bg-white absolute bottom-0', 
                {'translate-y-[150%]': !active}
            ]">

            </div>
        </div>

        <div :class="['absolute left-1/2 mt-16 -translate-x-1/2 transition-all duration-400 ease-in-out', {'translate-y-16 opacity-0': !active, 'opacity-100': active}]">
            <span class="text-4xl font-medium text-white/90">{{ name }}</span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        active: {
            type: Boolean,
            value: () => false,
        },
        image: String,
        name: String
    })
</script>
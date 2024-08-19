<template>
    
    <div :class="['h-[480px] w-80 transition duration-500 ease-out card z-1000 flex-none cursor-pointer rounded-3xl overflow-hidden relative', 
        {'scale-[0.75]': !active, 'bg-purple-600': active}
    ]">

        <img :class="['w-full h-full object-cover', {'grayscale': !active}]" :src="image" alt="">

    
        <div :class="['h-20 w-full  transition duration-300 ease-in-out bg-white absolute bottom-0', 
            {'translate-y-[150%]': !active}
        ]">

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
    })
</script>
<template>
    <div class="relative h-max">
        <div :class="['h-96 w-80 2xl:h-[480px] 2xl:w-[390px] transition duration-500 ease-out card z-1000 flex-none cursor-pointer rounded-3xl overflow-hidden relative', 
            {'scale-[0.8] 2xl:scale-[0.70]': !active, 'bg-purple-600': active}
        ]">

            <img :class="['w-full h-full object-cover', {'grayscale': !active}]" :src="image" alt="">

        
            <div :class="[color, 'h-16 2xl:h-20 w-full  transition justify-center flex items-center px-3 duration-300 ease-in-out absolute bottom-0', 
                {'translate-y-[150%]': !active}
            ]"> 
                    <span :class="['flex items-center font-black text-xl lg:text-3xl', 
                        {'text-white': color !== 'bg-white'}]">
                        Number {{ number}}
                    </span>
                
            </div>
        </div>

        <div :class="['absolute w-full text-center left-1/2 mt-14 2xl:mt-16 -translate-x-1/2 transition-all duration-400 ease-in-out', {'translate-y-16 opacity-0': !active, 'opacity-100': active}]">
            <span :class="[color, 'block w-max mx-auto mb-2 text-sm px-4 py-1 rounded-xl opacity-80', {'text-white': color !== 'bg-white'}]">Lorem ipsum dolor sit.</span>
            <span class="text-3xl sm:text-4xl 2xl:text-5xl top-0 font-semibold text-white/90">{{ name }}</span>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        active: {
            type: Boolean,
            value: () => false,
        },
        image: String,
        name: String,
        color: String,
        number: Number
    })
</script>
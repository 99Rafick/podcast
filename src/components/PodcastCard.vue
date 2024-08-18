<template>
    <div :class="['h-96 w-72 transition duration-300 ease-out card z-10 flex-none cursor-pointer rounded-3xl overflow-hidden relative', 
        {'bg-white scale-[0.85]': !active, 'bg-purple-600': active}
    ]">
        <div class="h-16 w-full translate-y-full  transition duration-150 ease-in-out bg-white absolute bottom-0">

        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        active: {
            type: Boolean,
            value: () => false,
        }
    })
</script>
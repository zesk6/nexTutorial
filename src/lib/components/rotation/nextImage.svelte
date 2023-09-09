<script lang="ts">
    import { onMount } from "svelte";
    import rotatelogic from '$lib/components/rotation/rotatelogic'
    import Nextlogo from '$lib/images/nextjs-icon-svgrepo-com.svg'

    let NextbuttonState = 'nextbuttonnotclicked'
    let nextImage: HTMLImageElement;
    onMount(() => {
        rotatelogic(nextImage, true)
    })
    function nextClick() {
        NextbuttonState = (NextbuttonState === 'nextbuttonnotclicked') ? 'nextbuttonclicked' : 'nextbuttonnotclicked';
    }
</script>
<style>
    #nextbutton{
        position: fixed;
        transition-duration: 500ms;
        transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .nextbuttonnotclicked{
        right: -66px;
    }
    .nextbuttonclicked{
        right: 15px;
    }
    .trans{
        transition-delay: 250ms;
        transition-duration: 50ms;
        transition-timing-function: linear;
    }
</style>
<button class="p-0 m-0 {NextbuttonState} fixed top-1/2 group " id="nextbutton" on:click={nextClick} >
    <img src={Nextlogo} alt="nextLogo" class="w-32 h-32  cursor-pointer"  bind:this={nextImage}>
    {#if NextbuttonState === 'nextbuttonclicked'}
        <span class="absolute bg-slate-800 border rounded-md border-slate-600 group-hover:scale-100 scale-0 trans m-2 p-2 
        left-3 top-5  flex flex-col justify-center items-center">
            <span class="text-sm text-gray-300">
                my course is better
            </span>
            <a href="/courses/next" class="p-1 m-1 bg-slate-700 border-slate-600 text-gray-300 text-xs border
            rounded-md hover:bg-slate-600 transition duration-200 ">
                go to mine
            </a>
        </span>
    {/if}
</button>
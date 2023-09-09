<script lang="ts">
    import { onMount } from "svelte";
    import React from '$lib/images/react-1-logo-svgrepo-com.svg'
    import rotatelogic from '$lib/components/rotation/rotatelogic'
    
    let ReactbuttonState = 'reactbuttonnotclicked'
    let reactImage: HTMLImageElement;
    onMount(() => {
        rotatelogic(reactImage, false);
    })
    function reactClick(){
        ReactbuttonState = (ReactbuttonState === 'reactbuttonnotclicked') ? 'reactbuttonclicked' : 'reactbuttonnotclicked';
    }
</script>
<style>
    #reactbutton{
        position: fixed;
        transition-duration: 300ms;
        transition-timing-function: ease-in;
    }
    .reactbuttonnotclicked{
        left: -66px; 
    }
    .reactbuttonclicked{
        left: 15px;
    }
    .trans{
        transition-delay: 250ms;
        transition-duration: 50ms;
        transition-timing-function: linear;

    }
</style>

<button class="p-0 m-0 fixed top-1/2 {ReactbuttonState} group" id="reactbutton" on:click={reactClick} >
    <img src={React} alt="ReactLogo" class="w-32 h-32 shadow-white cursor-pointer"  bind:this={reactImage}>
    {#if ReactbuttonState === 'reactbuttonclicked'}
        <span class="absolute bg-slate-800 border rounded-md border-slate-600 group-hover:scale-100 scale-0 trans m-2 p-2 
        left-3 top-5 ">
            <span class="text-sm text-gray-300">
                Hello! this is my course :)
            </span>
        </span>
    {/if}
</button>
<script lang="ts">
    import NextImage from '$lib/components/rotation/nextImage.svelte';
    import Reactimage from '$lib/components/rotation/reactimage.svelte';

    const list = [
        'take the course to find out :))))',
    ];
    
</script>


<style>
    .reacGradient{
        background-image: linear-gradient(to top,#61dafb,  #3c7787 );
        color: #0000;
        background-clip: text;
    }
    .graydient{
        background-image: linear-gradient(to top, #BBBBBB, #EEEEEE);
        color: #0000;
        background-clip: text;
    }
   
</style>


<svelte:head>
    <title>Free React Interactive Course</title>
    <meta name="description" content="Go from zero to building productoin-level front-end applications in React.js">
    <meta name="keywords" content="Javascript, React, Web-dev, Front-end">
</svelte:head>
<div class="px-56 mt-24">
    <header class="flex flex-col items-center">
        <h1 class="reacGradient text-6xl font-extrabold m-2">
            React Interactive Course
        </h1>
        <p class="text-md text-gray-400 font-semibold ">
            Go from zero to building production-level front-end applications in React.js
        </p>
    </header>
    <Reactimage />
    <NextImage /> 
    
    <article class="flex flex-col items-center">
        <div>
            <p class="text-gray-300 text-xl font-semibold">
                Get the proper introduction to React where you will actually code, like in a job.   
            </p>
        </div>
        <h2 class="text-4xl reacGradient font-bold m-2">
            What's inside?
        </h2>
        <ul>
            {#each list as listItem }
                <li class="text-gray-300 text-lg m-4">{listItem}</li>
            {/each}
            

        </ul>
    </article>
</div>
<section class="my-4 mx-7">
    <h3 class="text-4xl font-extrabold graydient flex flex-col items-center">
        Chapters:
    </h3>
    <div>


    </div>


</section>

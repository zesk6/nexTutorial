<script lang="ts">
    import { page } from '$app/stores';
    import error from '$lib/404video.mp4'
</script>

<center>
    <h1 class="text-4xl text-white m-2">{$page.status}: {$page.error?.message}</h1>
    <h2 class="text-3xl text-white m-2 ">Something went catastrophically wrong</h2>
    <video class=" w-full h-auto  " autoplay >
        <source src={error}>
        <track kind="captions">
    </video>
</center>
<script lang="ts">
    import Reac from '$lib/images/reac.svg'
    import Nex from '$lib/images/next.svg'
    import Github from '$lib/images/iconmonstr-github-1.svg'
    import '../app.css' 
    import YoutubeLogo from '$lib/images/youtubeLogo.svg'
    import RedditLogo from '$lib/images/redditlogo.svg'
    import { user, userData } from '$lib/stores'

    



</script>
<style>
    .gradient{
        background-image: linear-gradient(to right, #3db7c2, #333333 );
        color: #0000;
        background-clip: text;

    }
    .linear{
        background-image: linear-gradient(to right, #3db7c2, #333333 );

    }
    .op{
        opacity: 0.7;
    }


</style>
<div class="font-sans "> 
    <nav class="min-w-screen w-full    flex items-center text-2xl px-5 bg-slate-900" >
        <a href="/" class="flex items-center  basis-1/2">
            <div  class="flex">
                <img src={Reac} alt="logo1" width="75px">
                <img src={Nex} alt="logo2" width="75px">
            </div>    
            <span class="gradient font-extrabold text-4xl">nexTutorial</span>
        </a>
        <nav class="basis-1/2 flex justify-end items-center">
            <a href="/courses/react" class="p-0 m-2 text-gray-300 font-bold text-xl hover:text-white      ">
                React
            </a>
            <a href="/courses/next" class="p-0 m-2   text-gray-300 font-bold text-xl hover:text-white    ">
                Next
            </a>
            <hr class="h-[6px] rounded-full w-[6px] flex bg-gray-300 border-none items-center mx-[6px] ">
            <a href="/games" class="p-0 m-2      text-gray-300 font-bold text-xl hover:text-white ">
                Games
            </a>
            <a href="/blog" class="p-0 m-2      text-gray-300 font-bold text-xl hover:text-white ">
                controversialOpinions
            </a>
            <hr class="h-[6px] rounded-full w-[6px] flex bg-gray-300 border-none items-center mx-[6px] ">
            {#if $user}
                <div class="flex items-center m-2">
                    <img src={$user.photoURL} alt="profile pic" class="rounded-full w-12 ">
                    <span class="bg-green-600 p-[2px] text-white font-bold rounded-full text-sm absolute top-3 right-14
                    op">
                        {$userData?.xp ?? 0} XP
                    </span>
                </div>
            {:else}
                <a href="/login" class="p-2 m-2 text-gray-900 font-bold text-xl hover:bg-white border  rounded bg-gray-300
                border-gray-500 transition duration-200">
                    LOGIN
                </a>
            {/if}
            <a href="https://github.com/zesk6/nexTutorial" class="p-0 m-2      ">
                <img src={Github} alt="github" class="w-[30px]">
            </a>

        </nav>
    </nav>
    <main>
        <slot />
    </main>
    <footer class="flex flex-col items-center ">
        <hr class="rounded-full w-60  h-1 linear m-5  ">
        <a class="flex items-center m-3" href="/">
            <div class="flex">
                <img src={Reac} alt="logo1" width="75px">
                <img src={Nex} alt="logo2" width="75px">
            </div>    
            <span class="gradient font-extrabold text-4xl">nexTutorial</span>
        </a>
        <div class="flex items-center justify-between">
            <!-- change the links later -->
            <a href="https://youtube.com" class="p-2">
                <img src={YoutubeLogo} alt="youtube logo" class="w-10 h-10" >
            </a>
            <a href="https://github.com" class="p-2">
                <img src={Github} alt="github logo"     class="w-7 h-7">
            </a>
            <a href="https://reddit.com" class="p-2">
                <img src={RedditLogo} alt="reddit" class="w-10 h-10">
            </a>
        </div>
        <small class="text-sm text-gray-600   ">© Rectanguleur LLM</small>
    </footer>
</div>
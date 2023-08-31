<script lang="ts">
    import Reac from '$lib/images/reac.svg'
    import Nex from '$lib/images/next.svg'
    import Github from '$lib/images/iconmonstr-github-1.svg'
    import '../app.css' 

</script>
<style>
    .gradient{
        background-image: linear-gradient(to right, #3db7c2, #333333 );
        color: #0000;
        background-clip: text;

    }
</style>
<div class="font-sans">
    <header class="fixed min-w-screen w-full    flex items-center text-2xl px-5 bg-slate-900" >
        <div class="flex items-center  basis-1/2">
            <a href="/" class="flex">
                <img src={Reac} alt="logo1" width="75px">
                <img src={Nex} alt="logo2" width="75px">
            </a>    
            <span class="gradient font-extrabold text-4xl">nexTutorial</span>
        </div>
        <nav class="basis-1/2 flex justify-end items-center">
            <a href="/react" class="p-0 m-2 text-gray-300 font-bold text-xl hover:text-white      ">
                React
            </a>
            <a href="/next" class="p-0 m-2   text-gray-300 font-bold text-xl hover:text-white    ">
                Next
            </a>
            <hr class="h-[6px] rounded-full w-[6px] flex bg-gray-300 border-none items-center mx-[6px] ">
            <a href="/games" class="p-0 m-2      text-gray-300 font-bold text-xl hover:text-white ">
                Games
            </a>
            <a href="/blog" class="p-0 m-2      text-gray-300 font-bold text-xl hover:text-white ">
                controversialOpinions
            </a>
            <a href="https://github.com/zesk6/nexTutorial" class="p-0 m-2      ">
                <img src={Github} alt="github" class="w-[30px]">
            </a>
        </nav>
    </header>
    <main>
        <slot />
    </main>
</div>
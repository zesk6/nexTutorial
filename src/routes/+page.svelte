<style >
    .gradient{
        background-image: linear-gradient(to top, #ee9f27, #ec9006 );
        color: #0000;
        background-clip: text; 
        font-weight: 700;
    }
    .gradient3{
        background-image: linear-gradient(to top, #27ee45, #16901e );
        color: #0000;
        background-clip: text; 
    }
    .gradient2{
        background-image: linear-gradient(to top, #e62dc1, #68165c );
        color: #0000;
        background-clip: text; 
    }
    .lightning:hover{
        background-image: url("../lib/images/lightning.gif"); 
        box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px;
    }
    
    @keyframes in{
        from {opacity: 0;}
        to{opacity: 1;}
    }
    .lol{
        animation-name: in;
        animation-duration: 1000ms;
    }
</style>
<div class="min-h-screen h-full  pt-15 " >
        <section class="flex justify-start "> 
            <article class=" flex flex-col mt-32 ml-20 items-center">
                <h1 class="text-6xl text-white font-bold m-2 lol">Learn Web-dev</h1>
                <span class="text-6xl font-bold text-gray-300 m-2 lol">Faster and
                    <em class="gradient group">
                        Funner.
                        <span class="absolute scale-0 group-hover:scale-100 bg-slate-900 rounded-lg border border-slate-600 text-white
                        font-semibold p-2 m-2 text-lg left-1/3 top-1/2 transition duration-400 origin-bottom delay-100 ">
                            funner is a word
                        </span>        
                    </em>
                </span> 
                <p class="text-2xl font-semibold text-gray-400 flex flex-col items-center m-2">
                    <span>W3schools without the <em class="gradient2">boredom.</em></span>
                    <span>Fireship.io without the <em class="gradient3">29$/month</em></span>
                </p>
                <a href="/react" class="text-white bg-[#2a6786] p-2 text-2xl font-semibold rounded hover:bg-[#295063]
                transition duration-300 m-4 ">
                    start here
                </a>
            </article>
        </section>  
        <section class="flex justify-around">
            <article class="flex flex-col   p-5 rounded-lg     
              w-1/3 lol m-10 lightning justify-center">
                <h3 class="text-white text-3xl font-semibold m-1 ">⚡Interactive</h3>
                <p class="text-gray-300 text-md">
                    You shouldn't spend hours watching tutorials or thousands of dollars on bootcamps. You just need to, ACTUALLY CODE.
                    We(nexTutorial) provide an interactive tutorial where you can actively learn React. 
                </p>
            </article>
            <article class="flex flex-col     
            transition duration-300 w-1/3 lol m-10 p-5 justify-center">
                <h3 class="text-white text-3xl font-semibold m-1 ">Fun</h3>
                <p  class="text-gray-300 text-md">
                    Our free courses follow a linear stucture. Each lesson having a corresponding short video to explain the concepts
                    visually. Also, check out the <a href="/games" class="text-blue-500 underline">games</a>.
                </p>
            </article>
        </section> 
        <section>
            <h2>Some Cool Examples:</h2>
            <!-- fill this out in the future -->
        </section>

    
    

</div>
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
    
    @keyframes in{
        from {opacity: 0;}
        to{opacity: 1;}
    }
    .lol{
        animation-name: in;
        animation-duration: 1000mx;
    }
</style>
<div class="min-h-screen h-full bg-slate-900 pt-20" >
    <section class="flex justify-start "> 
        <article class=" flex flex-col mt-32 ml-20 items-center">
            <h1 class="text-6xl text-white font-bold m-2 lol">Learn Web-dev</h1>
            <span class="text-6xl font-bold text-gray-300 m-2 lol">Faster and
                <span class="gradient group">
                    Funner.
                    <span class="absolute scale-0 group-hover:scale-100 bg-slate-900 rounded-lg border border-slate-600 text-white
                    font-semibold p-2 m-2 text-lg left-1/3 top-1/2 transition duration-400 origin-bottom ">
                        funner is a word
                    </span>        
                </span>
            </span> 
            <p class="text-2xl font-semibold text-gray-400 flex flex-col items-center m-2">
                <span>W3schools without the <span class="gradient2">boredom.</span></span>
                <span>Fireship.io without the <span class="gradient3">29$/month</span></span>
            </p>
            <a href="/react" class="text-white bg-[#2a6786] p-2 text-3xl font-semibold rounded hover:bg-[#295063]
             transition duration-300 m-4 ">
                start here
            </a>
        </article>
    </section>  

    
    

</div>
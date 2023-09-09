<script lang="ts">
    import Complete from '$lib/images/unchecked.svg'
    import Incomplete from '$lib/images/checked.svg'

    export let course: string; // either react or next, used for redirecting
    export let urlName: string; // the lesson url directory
    export let name: string;  // lesson name
    export let completed: boolean;
    export let duration: string;
    export let active: boolean

    
</script>
<style>
    .bg{
        background-color: rgb(10, 17, 30);
    }
    .true{
        font-weight: 696;
        color: rgb(240, 240, 240);
    }
</style>
<a href={`/courses/${course}/lesson/${urlName}`} >
   <div class="flex items-center justify-around p-1 m-1 bg-slate-900 text-gray-400 hover:text-white   relative">
        {#if completed}
            <img src={Complete} alt="completeIcon" class="w-6 h-6 rounded-full ">
        {:else}
            <img src={Incomplete} alt="incompleteIcon" class="w-6 h-6 rounded-full">
        {/if}
        <div>
            <span class="text-xl m-2 {active.toString()}">{name}</span>
            {#if active}
                <span class="text-xl rounded-sm  text-red-700 relative font-bold ">:D</span>
            {:else}

                <span class="text-md rounded-sm bg  relative font-semibold  ">{duration}</span>
            {/if}
        </div>


   </div> 

</a>


<script lang="ts">
    import type { LayoutData } from "../../../$types";
    import ProgressBtn from "$lib/components/progressBtn.svelte"; 

    let lessons = [
        {
            name: 'Basics of React',
            url: 'react-basics',    
            course: 'react',
            completed: false,
            duration: '3:54', 
            active: false,


        }
    ]
    export let data: LayoutData;
    
</script>
<div class="flex">
    <div class="fixed">
        <ul>
            {#each lessons as lesson (lesson.url) }
                <li>
                    <ProgressBtn name={lesson.name} urlName={lesson.url} course={lesson.course}
                    completed={lesson.completed}
                    duration={lesson.duration} active={lesson.active}></ProgressBtn>
                </li>
                
                
            {/each}
        </ul>        

    </div>
    <slot></slot>
</div>

<script lang="ts">
    import Logic from "$lib/components/logic.svelte";

    let email = ''
    let password = ''

    let googleSignIn: () => Promise<void>
    let emailPassword: (arg0: string, arg1: string) => Promise<void>
    const goog = () => googleSignIn()
    const emailfunc = () => emailPassword(email, password)

</script>
<style>
    .bg{
        background-color: #3c9da6;
        border: 2px solid rgb(50, 129, 136);
    }
    .bg:hover{
        background-color: rgb(41, 133, 125);
    }
</style>
<div class="p-2" >
    <Logic bind:signInWithGoogle={googleSignIn} bind:emailAndPassword={emailPassword}>
        <form on:submit={emailfunc} class="flex flex-col items-center justify-center">
            <div class="flex flex-col ">
                <label for="email" class="text-gray-300 font-semibold text-2xl relative left-5 ">Email:</label>
                <input type="text" bind:value={email} id="email" class="p-4 m-4 text-2xl rounded-full " maxlength="50">
            </div>
            <div class="flex flex-col ">
                <label for="password" class="text-gray-300 font-semibold text-2xl relative left-5">Password:</label>
                <input type="text" bind:value={password} id="password" class="p-4 m-4 text-2xl rounded-full relative" maxlength="20">
            </div>
            <button type="submit" class="py-3 px-8 m-3 text-2xl font-semibold text-gray-200 bg rounded-full transition duration-200 
            cursor-pointer">Submit</button>
            <hr class="h-[1px] w-1/3 border border-gray-600 bg-gray-600 m-5">
            <button on:click={goog} class="py-2 px-5 m-3 text-3xl font-semibold bg-gray-300 text-gray-800 border rounded-xl
            border-gray-500 flex items-center hover:bg-gray-400 transition duration-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                oogle
            </button>
        </form>
    </Logic>
</div>

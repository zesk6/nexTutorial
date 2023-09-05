<script lang="ts">
    import { auth } from "$lib/firebase";
    import { db } from "$lib/firebase";
    import { writeBatch, doc, connectFirestoreEmulator} from "firebase/firestore";
    import { signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
    import { error } from "@sveltejs/kit"; 
    import type { User } from "firebase/auth";
    
    // to save the time to add user to the db everytime
    async function saveUser (user: User) {
        const batch = writeBatch(db)
        console.log(user) 
        batch.set(doc(db, "users", user.uid), {
            username:   user.displayName,
            email: user.email,
            courses: [],
            xp: 0,
        })
        await batch.commit()
        

    } 
    
    export async function signInWithGoogle() {
        try{
            const provider = new GoogleAuthProvider()
            const userCredential = await signInWithPopup(auth, provider)
            const user = userCredential.user
            saveUser(user)
            
        }catch(e: any){
            console.error(e)
            throw error(500, "we fucked up big time")
        }
    }
    


    export async function emailAndPassword(email: string, password: string){
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = await userCredential.user
            saveUser(user)    
        }catch(e: any){
            console.error(e)
            throw error(500, "we fucked up big time")
        }

    }
</script>

<!--the slot for all of the html in the +page.svelte-->
<slot></slot>
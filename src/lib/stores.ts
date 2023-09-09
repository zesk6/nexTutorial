import type { Readable } from "svelte/store";
import { writable } from "svelte/store";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { derived } from "svelte/store";


function userStore(){
    let unsubscribe: () => void;
    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        })
        return () => unsubscribe()
    })
    return {
        subscribe,
    };
}

/**
 * @param {string} document path or reference
 * @returns a store with realtime updates on document data
 */
function docStore<T>(path: string){
    let unsubscribe: () => void;
    const docRef = doc(db, path)
    const { subscribe } = writable<T | null> (null, (set) => {
        unsubscribe = onSnapshot(docRef, (snapshot) => {
            set((snapshot.data() as T) ?? null)
             
        })
        return () => unsubscribe()
    })
    return {
        subscribe, 
        ref: docRef,
        id: docRef.id
    }
}
export const user = userStore()

interface UserData {
    photoUrl: string,
    username: string,
    courses: [],
    xp: number,
}
export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null); 
  }
});  
/* 9-5-2023. Today was just a day like the others before it. I can feel the pain slowly going away. I have accepted the fact
that she is never going to come back, that I will live without her. We have to let go of the things that is in our pasts. Always
look into the future. You don't know what's coming. Mabye you get into a car accident and fucking die, or you meet your soulmate
(and then you fucking mess it up). Holding on to the past is not good. Because you're only deluding yourself by living in a fantasy
. Always living in denial, escaping reality. But reality will always get to you, sooner or later. And you have to accept that.
what the fuck did i just write, its actually pretty deep i guess */
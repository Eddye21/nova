import { getFirestore, collection, getDocs, query,  where, getDoc, doc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = []

    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    });
    return items
}

export const filterCategory = async (id) => {

    const q = query(collection(db, "items"), where("category", "==", id));
    const filterItems = []

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        filterItems.push(doc.data())
        return filterItems
    });
}


export const getItem = async (id) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}





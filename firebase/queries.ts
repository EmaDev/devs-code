import { collection, query, where, getDocs, getFirestore, orderBy } from "firebase/firestore";
import {app} from './config';
const db = getFirestore(app);

export const getPlanes = async() => {

    const q = query(collection(db, "coder-arg","planes","plan"), orderBy("id"));

    const querySnapshot = await getDocs(q);
    const arrayPlanes:any[] = [];
    querySnapshot.forEach((doc) => {
        arrayPlanes.push(doc.data());
    });

    return arrayPlanes;
};
import app from "./firebase-config";
import { getDatabase, push, ref, set } from "firebase/database";

export const addInfo = (values) => {
  const db = getDatabase();
  const userRef = ref(db, "blog");
  const newPostRef = push(userRef);
  set(newPostRef, {
    title: values.title,
    imgUrl: values.imgUrl,
    content: values.content,
  });
  console.log("veri eklendi");
};

import app from "./firebase-config";
import { getDatabase, onValue, push, ref, set, query } from "firebase/database";
import { useEffect, useState } from "react";

export const addInfo = (values) => {
  const db = getDatabase();
  const userRef = ref(db, "blog");
  const newPostRef = push(userRef);
  set(newPostRef, {
    title: values.title,
    imgUrl: values.imgUrl,
    content: values.content,
  });
  console.log(values.title, values.content);
};

export const useFetch = () => {
  const [blogsList, setBlogsList] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "blog");
    onValue(query(userRef), (snapshot) => {
      const blog = snapshot.val();
      const blogsArray = [];
      for (let id in blog) {
        blogsArray.push({ id, ...blog[id] });
      }
      setBlogsList(blogsArray);
    });
  }, []);
  return { isLoading, blogsList };
};

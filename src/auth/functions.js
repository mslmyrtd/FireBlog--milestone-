import app from "./firebase-config";
import { getDatabase, push, ref, set } from "firebase/database";
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
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
  }, []);
};

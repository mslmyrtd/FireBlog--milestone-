import app from "./firebase-config";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  query,
  remove,
  child,
  update,
} from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { successNote } from "../helpers/toastNotify";

export const addInfo = (values, email, date) => {
  const db = getDatabase();
  const userRef = ref(db, "blog");
  const newPostRef = push(userRef);
  set(newPostRef, {
    title: values.title,
    imgUrl: values.imgUrl,
    content: values.content,
    email: email,
    date: date,
  });
  successNote("Updated Successfully");
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
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogsList, deleteInfo, upDate };
};

export const deleteInfo = (id) => {
  const db = getDatabase();
  const userRef = ref(db, "blog");
  remove(ref(db, "blog/" + id));
  successNote("Deleted");
};

export const upDate = (id, title, content, imgUrl) => {
  const db = getDatabase();
  const infoData = {
    title: title,
    imgUrl: imgUrl,
    content: content,
    id: id,
  };
  // const newUserKey = push(child(ref(db), "blog/")).key;
  const updates = {};
  updates["blog/" + id] = infoData;
  successNote("Updated Successffully");
  return update(ref(db), updates);
};

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
  console.log(email);
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
};

export const upDate = ({ item }) => {
  const db = getDatabase();
  const infoData = {
    title: item.title,
    imgUrl: item.imgUrl,
    content: item.content,
    id: item.id,
  };
  // const newUserKey = push(child(ref(db), "blog/")).key;
  const updates = {};
  updates["blog/" + item.id] = infoData;
  return update(ref(db), updates);
};
export const useDate = () => {
  const [upDateList, setUpDateList] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "blog");
    onValue(query(userRef), (snapshot) => {
      const blog = snapshot.val();
      const upDateArray = [];
      for (let id in blog) {
        upDateArray.push({ id, ...blog[id] });
      }
      setUpDateList(upDateArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, upDateList };
};

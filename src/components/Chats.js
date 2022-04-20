import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

//components
import Navbar from "./Navbar";
//context
import { AuthContext } from "../context/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  const LogoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "9d121b61-7ec9-4d29-92c4-8e27e6c920c7",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        formData.append("firs-name", user.displayName.split(" ")[0]);
        formData.append("last-name", user.displayName.split(" ")[1]);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "baa875c2-d664-4fa5-a1f4-599fe675ace6",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  if (!user || loading) return "Loading...";

  return (
    <div>
      <Navbar LogoutHandler={LogoutHandler} />

      <ChatEngine
        height="calc(100vh - 64px)"
        projectID="9d121b61-7ec9-4d29-92c4-8e27e6c920c7"
        userName={user.email}
        userSecret={user.uid} 
      ></ChatEngine>
    </div>
  );
};

export default Chats;

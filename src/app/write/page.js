"use client";
import useAuth from "@/Hooks/useAuth";
import axios from "axios";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import toast from "react-hot-toast";

const page = () => {
  const { user, logOut } = useAuth();
  const apiEndPoint = "http://localhost:5000/addArticle";

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const article = form.article.value;
    const author = user.displayName;
    const authorEmail = user.email;
    const imglink = "https://i.ibb.co/zs785ry/business-man-1572059-1920.jpg";
    const newArticle = { title, article, author, authorEmail, imglink };
    console.log({ title, article, author, authorEmail });

    try {
      const response = await axios.post(apiEndPoint, newArticle);

      console.log("Article added successfully:", response.data);
      toast.success("Successfully added!");
    } catch (error) {
      toast.error("This didn't work.");
      console.error("Error adding article:", error);
    }
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-black text-center text-3xl py-10">
        Write Your Article
      </h1>
      <div>
        <form className="px-5" onSubmit={handleAdd}>
          <p className="text-sm text-white bg-gray-800 p-2 rounded-lg w-fit">
            Author: {user?.displayName}
          </p>

          <div className="my-2 block">
            <Label htmlFor="uploadImage" value="Upload Image" />
          </div>
          <FileInput id="upload image" />

          <div className="my-2 block">
            <Label htmlFor="title" value="Title:" />
          </div>
          <TextInput
            id="title"
            type="text"
            name="title"
            placeholder="Enter your title here"
            required
          />
          <div className="my-2 block">
            <Label htmlFor="article" value="Your Article:" />
          </div>
          <Textarea
            id="comment"
            name="article"
            placeholder="Write your article here...."
            required
            rows={15}
          />
          <Button color="dark" className="my-2" type="submit">
            Publish
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;

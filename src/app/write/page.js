"use client";
import useAuth from "@/Hooks/useAuth";
import axiosInstance from "@/api";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { imageUpload } from "@/api/utils";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const page = () => {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const apiEndPoint = "/addArticle";

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    // const article = form.article.value;
    const article = content;
    const author = user.displayName;
    const authorEmail = user.email;
    const imageData = await imageUpload(image);
    const imglink = imageData?.data?.display_url;
    const newArticle = { title, article, author, authorEmail, imglink };
    // console.log({ title, article, author, authorEmail });

    try {
      const response = await axiosInstance.post(apiEndPoint, newArticle);

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
          <FileInput id="upload image" onChange={handleImageChange} />

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

          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full bg-white h-96"
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

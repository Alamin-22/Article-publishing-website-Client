import axios from "axios";

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=d5f96f63fdf86fa9c38f16ef618661d0`,
    formData
  );
  console.log(data.data.display_url);
  return data;
};

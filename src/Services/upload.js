import axios from "axios";

const getNgrokEndpoint = () =>
  localStorage.getItem("ngrok-endpoint") || "http://ad3f8b71acba.ngrok.io";

const uploadVideo = async (formData) => {
  const UPLOAD_ENDPOINT = `${getNgrokEndpoint()}/api/transform-video`;
  const response = await axios.post(UPLOAD_ENDPOINT, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.path;
};

export { uploadVideo, getNgrokEndpoint };

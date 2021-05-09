// import axios from "axios";

// const getNgrokEndpoint = () =>
//   localStorage.getItem("ngrok-endpoint") || "http://f9770404ad74.ngrok.io";

const uploadVideo = async () => {
  // const UPLOAD_ENDPOINT = `${getNgrokEndpoint()}/api/transform-video`;
  // const response = await axios.post(UPLOAD_ENDPOINT, formData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  //   responseType: "arraybuffer",
  // });

  // const base64 = btoa(
  //   new Uint8Array(response.data).reduce(
  //     (data, byte) => data + String.fromCharCode(byte),
  //     ""
  //   )
  // );

  // return `data:${response.headers[
  //   "content-type"
  // ].toLowerCase()};base64,${base64}`;
  return await new Promise((resolve) =>
    setTimeout(() => resolve("http://localhost:5000/api/test"), 2000)
  );
};

export { uploadVideo };

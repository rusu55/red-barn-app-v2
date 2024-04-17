import { ImageResponse } from "next/og";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

export default async function og() {
  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center">
        <img
          src="https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/5acd99b1-8561-4ef0-84ee-6bdea535dd9b.jpg"
          alt="Red Barn Wedding Studio"
        />
        <div tw="absolute flex bg-black opacity-50 inset-0" />
        <div tw="absolute flex items-center top-2 w-full">
          <p tw="text-white text-4xl flex  font-bold m-5">
            Red Barn Wedding Studio
          </p>
        </div>
      </div>
    )
  );
}

import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div
      key={photo.id}
      className=" h-64 bg-gray-200 rounded-xl overflow-hidden relative hover:opacity-70"
    >
      <Image
        className="object-cover"
        fill={true}
        src={photo.src.large}
        alt={photo.alt}
        sizes="(max-width: 538px) 50vw"
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
      />
    </div>
  );
}

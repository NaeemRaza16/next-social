import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Stories = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/26698092/pexels-photo-26698092/free-photo-of-photo-of-a-wallaby-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="storyImages" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/26698092/pexels-photo-26698092/free-photo-of-photo-of-a-wallaby-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="storyImages" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/26698092/pexels-photo-26698092/free-photo-of-photo-of-a-wallaby-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="storyImages" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/26698092/pexels-photo-26698092/free-photo-of-photo-of-a-wallaby-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="storyImages" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/26698092/pexels-photo-26698092/free-photo-of-photo-of-a-wallaby-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="storyImages" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/26698092/pexels-photo-26698092/free-photo-of-photo-of-a-wallaby-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="storyImages" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        </div>
      </div>
    </div>
  );
};

export default Stories;
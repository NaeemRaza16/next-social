import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
	return (
		<div className="flex flex-col gap-4">
			{/* USER */}
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-between gap-4">
					<Image alt="" src={"https://images.pexels.com/photos/28056730/pexels-photo-28056730/free-photo-of-a-table-with-two-plates-of-food-and-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
						width={40}
						height={40}
						className="w-10 h-10 rounded-full"
					/>
					<span className="font-medium">Jack McBride</span>
				</div>
				<img src="/more.png" width={16} height={16} alt="" />
			</div>
			{/* DESC */}
			<div className="flex flex-col gap-4">
				<div className="w-full min-h-96 relative">
					<Image
						src={"https://images.pexels.com/photos/28366031/pexels-photo-28366031/free-photo-of-a-house-on-a-hill-with-a-balcony-and-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
						fill
						className="object-cover rounded-md"
						alt=""
					/>
				</div>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem accusantium nihil nostrum facilis maxime, quasi ratione perspiciatis similique rem voluptates, veniam quae distinctio ullam asperiores?</p>
			</div>
			{/* INTERECTION */}
			<div className="flex items-center justify-between text-sm my-4">
				<div className="flex gap-8">
					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							src={"/like.png"}
							width={16}
							height={16}
							className="cursor-pointer"
							alt=""
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">123 <span className="hidden md:inline">Likes</span></span>
					</div>
					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							src={"/comment.png"}
							width={16}
							height={16}
							className="cursor-pointer"
							alt=""
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">123 <span className="hidden md:inline">Comments</span></span>
					</div>
				</div>
				<div className="">
					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							src={"/share.png"}
							width={16}
							height={16}
							className="cursor-pointer"
							alt=""
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">123 <span className="hidden md:inline">Shares</span></span>
					</div>
				</div>
			</div>
			{/* Comments */}
			<Comments />
		</div>
	)
}

export default Post
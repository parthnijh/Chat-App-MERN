const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-3 items-center'>
				<div className='bg-[#5E81F4] animate-pulse w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1'>
					<div className='bg-[#5E81F4] animate-pulse h-4 w-40 rounded'></div>
					<div className='bg-[#5E81F4] animate-pulse h-4 w-40 rounded'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='bg-[#5E81F4] animate-pulse h-4 w-40 rounded'></div>
				</div>
				<div className='bg-[#5E81F4] animate-pulse w-10 h-10 rounded-full shrink-0'></div>
			</div>
		</>
	);
};

export default MessageSkeleton;

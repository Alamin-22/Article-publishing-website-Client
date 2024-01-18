import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full min-h-screen bg-gray-500 relative">
            <div className="absolute z-50 top-48 left-24">
                <h1 className="text-gray-800 font-bold text-6xl w-[640px]">Hello there! Welcome to Scriptly</h1>
                <p className="text-gray-800 text-xl w-[640px]">The best multipurpose article publishing website</p>
            </div>
            <div className="opacity-10">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src="/marek-levak-GNVxujZ_CxU-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;
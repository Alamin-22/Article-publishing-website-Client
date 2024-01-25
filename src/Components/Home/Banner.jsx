import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full h-[600px] bg-black relative">
            <div className="absolute z-40 h-full w-full flex items-center justify-center text-center flex-col">
                <h1 className="text-white font-black text-3xl lg:text-6xl max-w-80 lg:max-w-[640px]">Hello there! Welcome to Scriptly</h1>
                <p className="text-white font-semibold text-xl max-w-[640px] ">The best multipurpose article publishing website</p>
            </div>
            <div className="opacity-50">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src="/marek-levak-GNVxujZ_CxU-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;
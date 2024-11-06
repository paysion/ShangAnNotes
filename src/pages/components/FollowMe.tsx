import Image from 'next/image';
import myQRCode from 'public/opentecher002.avif';
import chatQRCode from "public/shangan9.avif";

export default function FollowMe() {
    return <>
        <h2 className="text-2xl font-semibold mt-6 mb-4">更多</h2>
        <p>欢迎各位局长加入上岸学堂！</p>
        {/* <p className="mt-5">
            上岸学堂是本人学习公考的笔记和经验，里面包含了我学习公考的笔记和经验和具有强大公考实战经验的AI助手，
            以及一些我收集的资料和题目，我会定时更新。
        </p> */}

        <div className="flex mt-5 items-center justify-center">
            <div className="w-1/2 items-center flex flex-col pr-2">
                <Image
                    src={myQRCode}
                    className="mb-5 rounded-md shadow-lg"
                    alt="上岸学堂"
                    width={200}
                    height={200}
                />
                <p className="nx-text-base font-bold text-center">扫码备注「<b>上岸学堂</b>」<br />免费获取上岸学堂打印版资料</p>
            </div>
            {/* <div className="w-1/2 items-center flex flex-col pl-2">
                <Image
                    src={chatQRCode}
                    className="mb-5 rounded-md shadow-lg"
                    alt="扫码加入上岸学堂11群"
                    width={200}
                    height={200}
                />
                <p className="nx-text-base font-bold text-center">扫码加入上岸学堂9群 <br /> 一起交流学习，一起上岸！</p>
            </div> */}
        </div>
    </>
}

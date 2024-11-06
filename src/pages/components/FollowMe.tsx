import Image from 'next/image';
import myQRCode from 'public/opentecher002.avif';
import payQRCode from "public/code.avif";

export default function FollowMe() {
    return <>
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
            <div className="w-1/2 items-center flex flex-col pl-2">
                <Image
                    src={payQRCode}
                    className="mb-5 rounded-md shadow-lg"
                    alt="打赏二维码"
                    width={200}
                    height={200}
                />
                <p className="nx-text-base font-bold text-center">免费不易，且行且珍惜<br />打赏支持一下吧！</p>
            </div>
        </div>
    </>
}

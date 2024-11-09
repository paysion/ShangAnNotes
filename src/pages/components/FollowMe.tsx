import Image from 'next/image';
import myQRCode from 'public/opentecher002.avif';
import payQRCode from "public/code.avif";
import styles from './FollowMe.module.css';

export default function FollowMe() {
    return <>
        <div className={styles.container}>
            <div className={`${styles.column} ${styles.columnLeft}`}>
                <Image
                    src={myQRCode}
                    className={styles.image}
                    alt="上岸学堂"
                    width={200}
                    height={200}
                />
                <p className={styles.text}>扫码备注「<b>上岸学堂</b>」<br />免费获取上岸学堂打印版资料</p>
            </div>
            <div className={`${styles.column} ${styles.columnRight}`}>
                <Image
                    src={payQRCode}
                    className={styles.image}
                    alt="打赏二维码"
                    width={200}
                    height={200}
                />
                <p className={styles.text}>免费不易，且行且珍惜<br />打赏支持一下吧！</p>
            </div>
        </div>
    </>
}
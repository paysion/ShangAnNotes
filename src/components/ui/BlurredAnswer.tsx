import React, { useState } from 'react';
import { Button } from 'antd';
import styles from './BlurredAnswer.module.css';

interface BlurredAnswerProps {
    children: React.ReactNode;
}

const BlurredAnswer: React.FC<BlurredAnswerProps> = ({ children }) => {
    const [isBlurred, setIsBlurred] = useState(true);

    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${isBlurred ? styles.blurred : ''}`}>
                {children}
            </div>
            {isBlurred && (
                <div className={styles.overlay}>
                    <Button
                        onClick={() => setIsBlurred(false)}
                        className={styles.button}
                    >
                        显示答案
                    </Button>
                </div>
            )}
        </div>
    );
};

export default BlurredAnswer;
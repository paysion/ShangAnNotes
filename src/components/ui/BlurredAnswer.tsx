import React, { useState } from 'react';
import { Button } from 'antd';

interface BlurredAnswerProps {
    children: React.ReactNode;
}

const BlurredAnswer: React.FC<BlurredAnswerProps> = ({ children }) => {
    const [isBlurred, setIsBlurred] = useState(true);

    return (
        <div className="relative">
            <div className={`transition-all duration-300 ${isBlurred ? 'blur-md' : ''}`}>
                {children}
            </div>
            {isBlurred && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                        onClick={() => setIsBlurred(false)}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        显示答案
                    </Button>
                </div>
            )}
        </div>
    );
};

export default BlurredAnswer;
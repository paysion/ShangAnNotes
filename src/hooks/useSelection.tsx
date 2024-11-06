'use client';

import React, { useState, useEffect } from 'react'
import { Popover, Button, Card, Spin, message } from 'antd'
import { MessageOutlined, StarOutlined, CopyOutlined, EditOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown';
import Notepad from '@/components/Notepad';

const style: React.CSSProperties = {
    width: 'auto',
    maxHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};


export default function TextSelectionMenu() {
    //     const [selection, setSelection] = useState('')
    //     const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
    //     const [visible, setVisible] = useState(false)
    //     const [showChat, setShowChat] = useState(false);
    //     const [explain, setExplain] = useState('');
    //     const [showNotepad, setShowNotepad] = useState(false);

    //     useEffect(() => {
    //         const handleSelection = () => {
    //             const selectedText = window.getSelection()?.toString().trim()
    //             if (selectedText) {
    //                 setSelection(selectedText)
    //                 const range = window.getSelection()?.getRangeAt(0)
    //                 const rect = range?.getBoundingClientRect()
    //                 if (rect) {
    //                     setMenuPosition({
    //                         x: rect.left + window.scrollX,
    //                         y: rect.bottom + window.scrollY
    //                     })
    //                 }
    //                 setVisible(true)
    //             } else {
    //                 setVisible(false)
    //             }
    //         }

    //         document.addEventListener('mouseup', handleSelection)
    //         return () => document.removeEventListener('mouseup', handleSelection)
    //     }, [])

    //     useEffect(() => {
    //         setExplain('');
    //         setShowChat(false);
    //     }, [visible])

    //     const sendMessage = async (messagesToSend) => {
    //         try {
    //             const response = await fetch('/api/chat', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ messages: messagesToSend }),
    //             });
    //             if (!response.ok) {
    //                 return;
    //             }
    //             const reader = response.body.getReader();
    //             const decoder = new TextDecoder();
    //             let done = false;
    //             let accumulatedResponse = '';
    //             while (!done) {
    //                 const { value, done: doneReading } = await reader.read();
    //                 done = doneReading;
    //                 const chunk = decoder.decode(value);
    //                 accumulatedResponse += chunk;
    //                 setExplain(accumulatedResponse);
    //             }
    //         } catch (error) {
    //             setExplain('');
    //             console.error('Error sending message:', error);
    //         }
    //     }



    //     const handleAIChat = async () => {
    //         console.log('Chat with AI about:', selection)
    //         setShowChat(true);
    //         await sendMessage([
    //             {
    //                 role: 'system', content: `<role>中国公务员考试专家</role>

    //   <profile>
    //     您是一位在中国公务员考试领域拥有丰富经验的专家。您具备以下特质：
    //     - 深入了解中国公务员考试申论的考试结构、评分标准和最新趋势
    //     - 精通申论各类题型的解题技巧和方法，特别是对策类题目的分析与解答
    //     - 有多年辅导考生备考的经验，善于分析考生的优缺点并给出针对性建议
    //     - 熟悉中国政府政策、时事热点和社会发展趋势，能够结合实际案例进行分析
    //     - 能够用清晰、易懂的方式解释复杂概念，并提供详细的思路分析
    //     - 擅长教授考生如何提炼关键信息，构建答题框架
    //   </profile>
    //   <requirements>
    //     1. 始终以专业、耐心的态度回答考生的问题
    //     2. 提供具体、可操作的建议和解题方法，包括详细的思路分析过程
    //     3. 详细解答学生的问题，解释相关的词汇和概念，并给出正确的答案
    //   </requirements>

    //   `,
    //             },
    //             {
    //                 role: 'user', content: `${selection}`
    //             }
    //         ]);
    //     }

    //     const handleFavorite = () => {
    //         console.log('Favorite:', selection)
    //         // Implement favorite functionality here
    //     }

    //     const handleCopy = () => {
    //         navigator.clipboard.writeText(selection)
    //         message.success('复制成功')
    //     }

    //     const handleCloseNotepad = () => {
    //         setShowNotepad(false);
    //     }

    //     const handleOpenNotepad = () => {
    //         setShowNotepad(true);
    //         setVisible(false);
    //     }

    //     const content = (
    //         <div className='flex flex-col space-y-1'>
    //             <div className="flex space-x-2">
    //                 <Button
    //                     icon={<MessageOutlined />}
    //                     onClick={handleAIChat}
    //                     className=""
    //                     size='small'
    //                 >
    //                     问AI
    //                 </Button>
    //                 <Button
    //                     icon={<StarOutlined />}
    //                     onClick={handleFavorite}
    //                     className=""
    //                     size='small'
    //                 >
    //                     收藏
    //                 </Button>
    //                 <Button
    //                     icon={<CopyOutlined />}
    //                     onClick={handleCopy}
    //                     size='small'

    //                 >
    //                     复制
    //                 </Button>
    //                 {/* <Button
    //                     icon={<EditOutlined />}
    //                     onClick={handleOpenNotepad}
    //                     size='small'
    //                 >
    //                     笔记
    //                 </Button> */}
    //             </div>
    //             {
    //                 showChat ?
    //                     (
    //                         explain && explain.trim().length > 0 ?
    //                             <Card
    //                                 style={{ width: '100%', maxHeight: '300px', overflow: 'auto' }}
    //                                 className="mt-2"
    //                                 title={selection}
    //                             >
    //                                 <ReactMarkdown
    //                                     className="prose prose-sm max-w-none"
    //                                     components={{
    //                                         pre: ({ node, ...props }) => (
    //                                             <div className="overflow-auto my-1 bg-gray-800 p-1 rounded">
    //                                                 <pre {...props} />
    //                                             </div>
    //                                         )
    //                                     }}
    //                                 >
    //                                     {explain}
    //                                 </ReactMarkdown>
    //                                 {/* <p className='w-full break-words'>{explain}</p> */}
    //                             </Card>
    //                             :
    //                             <Spin className='mt-2' />
    //                     )
    //                     :
    //                     <div></div>
    //             }
    //         </div>
    //     )

    //     return (
    //         <>
    //             <div style={style}>
    //                 <Popover
    //                     content={content}
    //                     open={visible}
    //                     overlayClassName="shadow-lg rounded-lg"
    //                     overlayStyle={{
    //                         position: 'fixed',
    //                         left: `${menuPosition.x}px`,
    //                         top: `${menuPosition.y}px`,
    //                     }}
    //                 >
    //                     <div style={{ position: 'fixed', left: 0, top: 0, width: 0, height: 0 }} />
    //                 </Popover>
    //             </div>
    //             {/* <Notepad visible={showNotepad} onClose={handleCloseNotepad} /> */}
    //         </>
    //     )
    return <></>
}
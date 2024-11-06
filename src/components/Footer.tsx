export default function Footer() {
    return (
        <footer>
            <div className="w-full py-8 bg-gray-100 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">关注我们的公众号</h3>
                            <p className="text-gray-600">扫描二维码，获取更多资讯</p>
                            {/* 这里可以添加一个二维码图片 */}
                            <img src="/qrcode.png" alt="公众号二维码" className="w-32 h-32 mt-2" />
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-gray-600 mb-2">© 2023 Your Company Name. All rights reserved.</p>
                            <p className="text-gray-500 text-sm">
                                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                                    备案号：京ICP备XXXXXXXX号-X
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
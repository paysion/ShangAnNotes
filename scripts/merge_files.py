import os
from pathlib import Path
from datetime import datetime
def merge_markdown_files(input_dir: str, output_file: str, target_folders: list[str]):
    """
    合并指定文件夹下所有的Markdown文件到一个文件中
    
    Args:
        input_dir: 输入目录路径
        output_file: 输出文件路径
        target_folders: 需要合并的目标文件夹列表
    """
    # 获取所有的md文件路径
    md_files = []
    for folder in target_folders:
        folder_path = os.path.join(input_dir, folder)
        if not os.path.exists(folder_path):
            print(f"警告: 文件夹 {folder_path} 不存在，已跳过")
            continue
            
        for root, _, files in os.walk(folder_path):
            for file in files:
                if file.endswith('.md'):
                    md_files.append(os.path.join(root, file))
    
    # 按文件路径排序，确保合并顺序一致
    # md_files.sort()
    
    # 合并文件内容
    with open(output_file, 'w', encoding='utf-8') as outfile:
        current_folder = None
        for md_file in md_files:
            # 获取相对路径
            relative_path = os.path.relpath(md_file, input_dir)
            # 获取顶层文件夹名称
            top_folder = relative_path.split(os.sep)[0]
            
            # 如果进入新的文件夹，添加文件夹标题
            if current_folder != top_folder:
                current_folder = top_folder
                outfile.write(f'\n# {current_folder}\n\n')
                outfile.write('**欢迎登录[上岸学堂获取更多考公资料和免费申论批改行测辅导](https://note.gongkaoshangan.com "最好的考公学习平台")**')
            
            # 写入文件名作为二级标题
            # outfile.write(f'\n## {relative_path}\n\n')
            
            # 写入文件内容
            with open(md_file, 'r', encoding='utf-8') as infile:
                content = infile.read()
                # 移除模糊答案标签
                content = content.replace("<BlurredAnswer>", "").replace("</BlurredAnswer>", "")
                content = content.replace("$$", "\n$$\n")
                outfile.write(content)
                outfile.write('\n\n---\n')

if __name__ == '__main__':
    # 使用 Path 对象获取当前文件路径和上级目录
    current_path = Path(__file__).resolve()
    # 获取上两级目录
    input_directory = current_path.parent.parent
    current_time = datetime.now().strftime("%Y%m%d")
    output_path = current_path.parent / f'上岸指南V{current_time}.md'
    
    # 获取上级目录下的所有文件夹
    target_folders = [
        folder.name 
        for folder in input_directory.iterdir() 
        if folder.is_dir() and not folder.name.startswith('.') and '.' in folder.name
    ]
    target_folders.sort()  # 按文件夹名称排序
    
    print("要合并的文件夹：", target_folders)
    
    # 执行合并
    merge_markdown_files(str(input_directory), str(output_path), target_folders)
    print(f'合并完成！输出文件：{output_path}')
    
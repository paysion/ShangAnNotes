import os
from pathlib import Path

def merge_markdown_files(input_dir: str, output_file: str):
    """
    合并指定目录下所有的Markdown文件到一个文件中
    
    Args:
        input_dir: 输入目录路径
        output_file: 输出文件路径
    """
    # 获取所有的md文件路径
    md_files = []
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    
    # 按文件路径排序，确保合并顺序一致
    md_files.sort()
    
    # 合并文件内容
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for md_file in md_files:
            # 写入文件名作为标题
            relative_path = os.path.relpath(md_file, input_dir)
            outfile.write(f'\n## {relative_path}\n\n')
            
            # 写入文件内容
            with open(md_file, 'r', encoding='utf-8') as infile:
                content = infile.read()
                outfile.write(content)
                outfile.write('\n\n---\n')  # 添加分隔线

if __name__ == '__main__':
    # 设置输入输出路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    input_directory = os.path.join(current_dir, '..')  # 父目录
    output_path = os.path.join(current_dir, 'merged_markdown.md')
    
    # 执行合并
    merge_markdown_files(input_directory, output_path)
    print(f'合并完成！输出文件：{output_path}')
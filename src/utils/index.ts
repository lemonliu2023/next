export const exportTextPlainContent = (content: string, filename?: string) => {
  const blob = new Blob([content], { type: 'text/plain' });

  // 创建 a 标签
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename || 'a.txt';

  // 模拟点击下载
  link.click();

  // 释放 URL 对象
  URL.revokeObjectURL(link.href);
};

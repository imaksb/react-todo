import { useState, useEffect } from "react";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const generateRandomNews = () => {
      const randomNews: NewsItem[] = [];
      for (let i = 0; i < 5; i++) {
        randomNews.push({
          id: i + 1,
          title: `Випадкова новина ${i + 1}`,
          content: `Це випадковий текст для новини ${
            i + 1
          }. Тут може бути будь-яка інформація.`,
          date: new Date().toLocaleDateString("uk-UA"),
        });
      }
      setNews(randomNews);
    };

    generateRandomNews();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Новини</h1>
      {news.map((item) => (
        <div key={item.id} className="mb-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-2">{item.content}</p>
          <p className="text-sm text-gray-500">Дата: {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default News;

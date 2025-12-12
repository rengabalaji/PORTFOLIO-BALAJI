import { articles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../ui/card';

const ArticlesSection = () => {
  return (
    <section id="articles" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8">
        Featured <span className="text-primary animate-glow">Articles</span>
      </h2>
      <div className="space-y-6">
        {articles.map((article, index) => {
          const articleImage = PlaceHolderImages.find((img) => img.id === article.imageId);
          return (
            <Link href={article.link} key={article.title} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="bg-card/50 backdrop-blur-sm border-border p-4 flex items-center gap-4 transition-all duration-300 hover:border-primary hover:bg-primary/10">
                {articleImage && (
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={articleImage.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover rounded-md"
                      data-ai-hint={articleImage.imageHint}
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ArticlesSection;

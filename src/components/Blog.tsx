import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2025',
      excerpt: 'Explore the latest AI technologies and how they are reshaping business operations, from automation to predictive analytics.',
      author: 'Dr. Sarah Johnson',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices for Enterprise Applications',
      excerpt: 'A comprehensive guide to securing your cloud infrastructure and protecting sensitive data in multi-cloud environments.',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Cloud Security',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Learn how to design and implement microservices that can handle growing user demands while maintaining performance.',
      author: 'Alex Rodriguez',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'Software Architecture',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Data Privacy in the Age of Analytics',
      excerpt: 'Understanding GDPR compliance and implementing privacy-first data strategies for modern analytics platforms.',
      author: 'Dr. Emily Watson',
      date: 'January 8, 2025',
      readTime: '7 min read',
      category: 'Data Privacy',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 5,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Practical strategies for implementing CI/CD pipelines and automation tools to accelerate software delivery.',
      author: 'James Liu',
      date: 'January 5, 2025',
      readTime: '9 min read',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile-First Design: Creating Responsive User Experiences',
      excerpt: 'Best practices for designing mobile-first applications that provide seamless experiences across all devices.',
      author: 'Lisa Park',
      date: 'January 3, 2025',
      readTime: '5 min read',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Cloud Security', 'Software Architecture', 'Data Privacy', 'DevOps', 'UI/UX Design'];

  return (
    <section id="blog" className="section-light py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technology Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from the world of technology and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-accent/20 text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.id} className="card-elevated group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={14} />
                    {post.author}
                  </div>
                  
                  <button className="flex items-center gap-2 text-accent hover:text-success font-medium group/btn">
                    Read More
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="card-elevated group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-accent/5 rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Stay Updated with Tech Insights
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest technology trends, tutorials, and industry insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-accent/20 focus:outline-none focus:border-accent bg-background"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
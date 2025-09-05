import { ShoppingCart, Star, Eye } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Professional Website Package',
      price: '$2,999',
      originalPrice: '$3,999',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      badge: 'Best Seller',
      description: 'Complete responsive website with modern design, SEO optimization, and CMS integration.'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      price: '$8,999',
      originalPrice: '$12,999',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      badge: 'Popular',
      description: 'Cross-platform mobile application with native performance and beautiful UI/UX.'
    },
    {
      id: 3,
      name: 'E-commerce Solution',
      price: '$5,999',
      originalPrice: '$7,999',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      badge: 'New',
      description: 'Complete online store with payment integration, inventory management, and analytics.'
    },
    {
      id: 4,
      name: 'Cloud Infrastructure Setup',
      price: '$3,499',
      originalPrice: '$4,999',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      badge: '',
      description: 'Scalable cloud infrastructure with automated deployment and monitoring tools.'
    },
    {
      id: 5,
      name: 'AI Chatbot Integration',
      price: '$1,999',
      originalPrice: '$2,999',
      rating: 4.8,
      reviews: 74,
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop',
      badge: 'Hot',
      description: 'Intelligent chatbot with natural language processing and customer support automation.'
    },
    {
      id: 6,
      name: 'Data Analytics Dashboard',
      price: '$4,499',
      originalPrice: '$5,999',
      rating: 4.9,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      badge: '',
      description: 'Interactive dashboard with real-time data visualization and business insights.'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-success text-success-foreground';
      case 'Popular':
        return 'bg-accent text-accent-foreground';
      case 'New':
        return 'bg-emerald-green text-white';
      case 'Hot':
        return 'bg-red-500 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technology Solutions Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready-to-deploy technology packages designed to accelerate your business growth with proven solutions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-elevated group overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.badge && (
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-1">
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Add to Cart Button */}
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Need Something Custom?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our packages are fully customizable. Let's create a solution that perfectly fits your needs.
          </p>
          <button className="btn-ghost">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
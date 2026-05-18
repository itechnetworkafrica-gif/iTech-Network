import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Download, Star, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Store() {
  const products = [
    { id: 1, name: "Premium POS UI Kit", category: "Templates", price: "$49", rating: 4.8, sales: 120, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Business Branding Pack", category: "Branding", price: "$29", rating: 4.9, sales: 340, img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Digital Marketing E-Book", category: "E-Books", price: "$19", rating: 4.7, sales: 500, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Corporate Dashboard React", category: "Code", price: "$99", rating: 5.0, sales: 85, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Startup Pitch Deck", category: "Presentations", price: "$24", rating: 4.6, sales: 210, img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "African Tech Vector Icons", category: "Assets", price: "$15", rating: 4.9, sales: 430, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      <div className="bg-gray-950 pt-32 pb-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Digital <span className="text-brand-green">Marketplace</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Premium templates, UI kits, and digital assets to accelerate your business.</p>
          
          <div className="max-w-xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input className="h-14 pl-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-brand-green" placeholder="Search products..." />
            </div>
            <Button className="h-14 rounded-full px-8 bg-brand-green hover:bg-green-700 font-bold">Search</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Filter className="w-5 h-5"/> Categories</h3>
              <div className="space-y-2">
                {["All Products", "Templates", "Branding", "E-Books", "Code", "Presentations", "Assets"].map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="rounded text-brand-green focus:ring-brand-green" defaultChecked={cat === "All Products"} />
                    <span className="text-gray-600 group-hover:text-brand-green font-medium">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-800">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900 leading-tight">{product.name}</h3>
                    <span className="font-black text-brand-green">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center text-amber-500 font-medium"><Star className="w-4 h-4 fill-current mr-1"/> {product.rating}</span>
                    <span>{product.sales} Sales</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-black hover:bg-gray-800 text-white rounded-xl">Buy Now</Button>
                    <Button variant="outline" size="icon" className="rounded-xl border-gray-200 text-gray-600 hover:text-brand-green hover:border-brand-green shrink-0">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
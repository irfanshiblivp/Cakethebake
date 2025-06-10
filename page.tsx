import { Button } from "@/components/ui/button"
import HeroCarousel from "@/components/hero-carousel"
import FeaturedCakes from "@/components/featured-cakes"
import Testimonials from "@/components/testimonials"
import SeasonalSpecials from "@/components/seasonal-specials"
import CakeCategories from "@/components/cake-categories"
import { Cake, Gift, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-brown-dark mb-4">Welcome to Bake the Cake</h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            We create delicious, handcrafted cakes for all your special occasions. From birthdays to weddings, our cakes
            are made with love and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cake className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-playfair text-brown-dark mb-2">Custom Cakes</h3>
            <p className="text-brown mb-4">Design your perfect cake with our interactive cake builder.</p>
            <Button variant="outline" className="border-pink-300 text-pink-500 hover:bg-pink-50">
              Design Now
            </Button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-playfair text-brown-dark mb-2">Special Occasions</h3>
            <p className="text-brown mb-4">Celebrate your special moments with our delicious cakes.</p>
            <Button variant="outline" className="border-yellow-300 text-yellow-500 hover:bg-yellow-50">
              Explore
            </Button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105">
            <div className="bg-brown-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-brown" />
            </div>
            <h3 className="text-xl font-playfair text-brown-dark mb-2">Seasonal Specials</h3>
            <p className="text-brown mb-4">Try our limited-time seasonal flavors and designs.</p>
            <Button variant="outline" className="border-brown-300 text-brown hover:bg-brown-50">
              View Specials
            </Button>
          </div>
        </div>
      </section>

      <FeaturedCakes />
      <SeasonalSpecials />
      <CakeCategories />
      <Testimonials />

      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-brown-dark mb-6">Ready to Order Your Dream Cake?</h2>
          <p className="text-lg text-brown max-w-2xl mx-auto mb-8">
            Whether you choose from our collection or create your own design, we're here to make your cake dreams come
            true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg">Order Now</Button>
            <Button variant="outline" className="border-pink-300 text-pink-500 hover:bg-pink-50 px-8 py-6 text-lg">
              Customize Your Cake
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

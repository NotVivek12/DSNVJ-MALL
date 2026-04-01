import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main className="flex-1 container mx-auto px-4 py-8">
      </main>
      <Footer />
    </div>
  );
}
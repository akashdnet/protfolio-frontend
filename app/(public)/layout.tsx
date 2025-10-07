import Footer from '@/components/Footer';
import Header from "@/components/Header";
import ServerHeader from '@/components/ServerHeader';



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {







  return (
    
      <main className='min-h-screen flex flex-col w-full'>
        <ServerHeader/>
        <div className="container mx-auto md:w-6xl flex-1">
        {children}
        </div>
        <Footer/>
      </main>
    
  );
}

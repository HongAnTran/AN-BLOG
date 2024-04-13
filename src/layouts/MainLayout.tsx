import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' flex-1 flex flex-col' >
            <Header />
            <div className=' flex-1  container'>
                {children}
            </div>
            <Footer />
        </main>
    )
}

import Header from './components/Header'
import Footer from './components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

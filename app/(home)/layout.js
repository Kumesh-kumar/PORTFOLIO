import Navbar from "@/components/Navbar";



export default function ReactLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
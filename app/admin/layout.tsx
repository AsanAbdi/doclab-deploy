import "../client/globals.css";
import AdminFooter from "./components/AdminFooter";
import AdminNavbar from "./components/AdminNavbar/index"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <AdminNavbar />
        {children}
        {/* <AdminFooter /> */}
    </html>
  )
}

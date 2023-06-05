import './globals.css'
import { Metadata } from 'next';
import {Asap_Condensed} from "next/font/google";
export const metadata: Metadata = {
    title: 'Artem Antonov - Software engineer based in Salou 🇪🇸',
    description: 'Software engineer based in Salou 🇪🇸',
};


const asap_condensed = Asap_Condensed({
    subsets: ['latin'], weight: ["400", "700"],
});
export default function RootLayout({
                                       // Layouts must accept a children prop.
                                       // This will be populated with nested layouts or pages
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={asap_condensed.className}>{children}</body>
        </html>
    );
}
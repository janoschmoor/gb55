
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold">Leider falsch</h1>

            {/* a nextjs link for each link in links in rows of 3 */}

            <div className="mt-40 border-black rounded border-2 flex flex-col items-center p-2 hover:border-white">
                
                
                <Link href={"/"} className="text-lg">
                    nochmal versuchen
                </Link>
                
            </div>

            
        </main>
    );
}
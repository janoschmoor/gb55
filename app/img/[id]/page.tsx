
import KeyForm from './keyForm';

export default function Page({ params }: { params: { id: string } }) {
    return (
        
        <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-3xl font-bold">Bild: {params.id}</h1>

        {/* a nextjs link for each link in links in rows of 3 */}

        <div className="mt-20">
            
            <KeyForm props={{ id: params.id }} />
            
        </div>

        
    </main>
    );
}
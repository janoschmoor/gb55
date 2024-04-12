
import KeyForm from './keyForm';

export default function Page({ params }: { params: { id: string } }) {
    return (
        <main className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Bild: {params.id}</h1>
                <KeyForm props={{ id: params.id }} />
            </div>
        </main>
    );
}
import { redirect } from 'next/navigation';


export default function KeyForm({props} : {props: {id: string}}) {
    async function checkKey(formData: FormData) {
      'use server';
   
      const rawFormData = {
        key: formData.get('key'),
      };

      console.log(rawFormData.key)

      var processedKey = rawFormData?.key?.toString().toLowerCase();

      console.log(processedKey);
      
      if (processedKey == undefined) {
        redirect('/fail');
      }
   
      switch (props.id) {
        case '1':
            if (processedKey.includes('beef')) {
                redirect('/sol/Rp2PD5yAMSKpAdKb');
            }
            break;
        case '2':
            if (processedKey.includes('ring')) {
                redirect('/sol/VQTcTgD4mcVz1h97');
            }
            break;
        case '3':
            if (processedKey.includes('37')) {
                redirect('/sol/edhmqnnAICqnyxaP');
            }
            break;
        case '4':
            if (processedKey.includes('beef')) {
                redirect('/sol/I5MfEwwCplIQnKbnG');
            }
        case '5':
            if (processedKey.includes('finger an einer hand') && (processedKey.includes('5') || processedKey.includes('fünf'))) {
                redirect('/sol/pt7qYK6jQP0lNxVK');
            }
            break;
        case '6':
            if (processedKey.includes('vektorgeometrie')) {
                redirect('/sol/Vws06OQ0hfGzYJpT');
            }
            break;
        case '7':
            if (processedKey.includes('ti-30x')) {
                redirect('/sol/TXkZFyEuU5wsUGJK');
            }
            break;
        case '8':
            if (processedKey.includes('65536')) {
                redirect('/sol/SD2d6YaoNGXmgR2R');
            }
            break;
        case '9':
            if (processedKey.includes('always')) {
                redirect('/sol/h8VUeff0wjwhG4O9');
            }
            break;
        case '10':
            if (processedKey.includes('pipi langstrumpf')) {
                redirect('/sol/06rnJF5jmzCFSgsQ');
            }
            break;
        case '11':
            if (processedKey.includes('bitte')) {
                redirect('/sol/LC9gPq4RFlFJf288');
            }
            break;
    }

    redirect('/fail');

    }

    // placeholders
    const placeholders = [
        {id: 1, value: 'Wort eingeben'},
        {id: 2, value: 'Wort eingeben'},
        {id: 3, value: 'Zahl eingeben'},
        {id: 4, value: 'Code eingeben'},
        {id: 5, value: '5 Wörter eingeben'},
        {id: 6, value: 'Wort eingeben'},
        {id: 7, value: 'Code eingeben'},
        {id: 8, value: 'Zahl eingeben'},
        {id: 9, value: 'Wort eingeben'},
        {id: 10, value: 'Name eingeben'},
        {id: 11, value: 'Wort eingeben'},
    ];

    const placeholder = placeholders.find((p) => p.id === parseInt(props.id));
   
    return (
        <form action={checkKey}>
            <input
                id="key"
                name="key"
                type="text"
                placeholder={placeholder?.value}
                className="px-2 py-1 bg-black border border-gray-800 rounded-l text-white outline-none"
            />
            <button
                type="submit"
                className="px-4 py-1 bg-blue-500 text-white rounded-r border border-gray-800 outline-none hover:bg-blue-700"
            >
                Los!
            </button>
        </form>
    )
  }
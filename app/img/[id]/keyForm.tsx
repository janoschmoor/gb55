import { redirect } from 'next/navigation';


export default function KeyForm({props} : {props: {id: string}}) {
    async function checkKey(formData: FormData) {
      'use server';
   
      const rawFormData = {
        key: formData.get('key'),
      };

      console.log(rawFormData.key)
   
      switch (props.id) {
        case '1':
            if (rawFormData.key === 'GB55') {
                redirect('/sol/Rp2PD5yAMSKpAdKb');
            }
            break;
        case '2':
            if (rawFormData.key === 'test') {
                redirect('/sol/VQTcTgD4mcVz1h97');
            }
            break;
        case '3':
            if (rawFormData.key === 'test') {
                redirect('/sol/edhmqnnAICqnyxaP');
            }
            break;
        case '4':
            if (rawFormData.key === 'test') {
                redirect('/sol/pt7qYK6jQP0lNxVK');
            }
            break;
        case '5':
            if (rawFormData.key === 'test') {
                redirect('/sol/Vws06OQ0hfGzYJpT');
            }
            break;
        case '6':
            if (rawFormData.key === 'test') {
                redirect('/sol/TXkZFyEuU5wsUGJK');
            }
            break;
        case '7':
            if (rawFormData.key === 'test') {
                redirect('/sol/SD2d6YaoNGXmgR2R');
            }
            break;
        case '8':
            if (rawFormData.key === 'test') {
                redirect('/sol/h8VUeff0wjwhG4O9');
            }
            break;
        case '9':
            if (rawFormData.key === 'test') {
                redirect('/sol/06rnJF5jmzCFSgsQ');
            }
            break;
        case '10':
            if (rawFormData.key === 'test') {
                redirect('/sol/LC9gPq4RFlFJf288');
            }
            break;
    }

    redirect('/fail');

    }
   
    return (
        <form action={checkKey}>
            <input
                id="key"
                name="key"
                type="text"
                placeholder="Code eingeben"
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
import { redirect } from 'next/navigation';


export default function KeyForm({props} : {props: {id: string}}) {
    async function checkKey(formData: FormData) {
      'use server'
   
      const rawFormData = {
        key: formData.get('key'),
      };

      console.log(rawFormData.key)
   
      switch (props.id) {
        case '1':
            if (rawFormData.key === 'GB55') {
                redirect('/sol/test');
            }
            break;
        case '2':
            if (rawFormData.key === 'test') {
                redirect('/sol/test');
            }
            break;
        case '3':
            if (rawFormData.key === 'test') {
                redirect('/sol/test');
            }
            break;
        case '4':
            if (rawFormData.key === 'test') {
                redirect('/sol/test');
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
                placeholder="Enter key"
                className="px-2 py-1 border border-gray-300 rounded-l text-black"
            />
            <button
                type="submit"
                className="px-4 py-1 bg-blue-500 text-white rounded-r"
            >
                Update
            </button>
        </form>
    )
  }
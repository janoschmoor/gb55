import Link from 'next/link';


export default function Home() {

  const links = [
    {
      id: "1",
      title: "Bild 1",
      href: "/img/1",
    },
    {
      id: "2",
      title: "Bild 2",
      href: "/img/2",
    },
    {
      id: "3",
      title: "Bild 3",
      href: "/img/3",
    },
    {
      id: "4",
      title: "Bild 4",
      href: "/img/4",
    },
    {
      id: "5",
      title: "Bild 5",
      href: "/img/5",
    },
    {
      id: "6",
      title: "Bild 6",
      href: "/img/6",
    },
    {
      id: "7",
      title: "Bild 7",
      href: "/img/7",
    },
    {
      id: "8",
      title: "Bild 8",
      href: "/img/8",
    },
    {
      id: "9",
      title: "Bild 9",
      href: "/img/9",
    },
    {
      id: "10",
      title: "Bild 10",
      href: "/img/10",
    },
    {
      id: "11",
      title: "Bild 11",
      href: "/img/11",
    }
  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">GB55 Bilderjagd</h1>

      {/* a nextjs link for each link in links in rows of 3 */}

      <div className="grid grid-cols-3 gap-4">
        {links.map((link) => (
          <Link className="text-lg border-black rounded border-2 flex flex-col items-center p-2 hover:border-white" key={link.id} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>

      <p className="text-lg text-center">
        Löse ein Rätsel und hol dir einen Hinweis!
      </p>
    </main>
  );
}

import Link from 'next/link';


export default function Home() {

  const links = [
    {
      id: "1",
      title: "Bild 1",
      href: "/bild/1",
    },
    {
      id: "2",
      title: "Bild 2",
      href: "/bild/2",
    },
    {
      id: "3",
      title: "Bild 3",
      href: "/bild/3",
    },
    {
      id: "4",
      title: "Bild 4",
      href: "/bild/4",
    }
  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">test test GB55</h1>

      {/* a nextjs link for each link in links in rows of 3 */}

      <div className="grid grid-cols-3 gap-4">
        {links.map((link) => (
          <Link className="text-lg font-bold" key={link.id} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>

      <p className="text-lg text-center">
        Tipp gefällig? <br />
        Löse ein Rätsel und ...
      </p>
    </main>
  );
}

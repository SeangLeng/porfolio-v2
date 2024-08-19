import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-3 flex items-center justify-center bg-foreground">
      <Link
        href={"mailto:mr.lengseng@gmail.com"}
        className="text-center w-full hover:underline"
      >
        mr.lengseng@gmail.com
      </Link>
    </footer>
  );
}

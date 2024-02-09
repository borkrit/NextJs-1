import Link from "next/link";

export default function AboutLayout({ children }) {
  console.log('3')
  return (
    <section style={{ display: "flex", gap: "20px" }}>
      <div style={{ width: "200px" }}>
        <p>About Company menu</p>
        <ul>
          <li>
          <Link href={'/about'} > goal</Link>

          </li>
          <li>
          <Link href={'/about/team'} > Team</Link>

          </li>
        </ul>
      </div>

      <div>{children}</div>
    </section>
  );
}
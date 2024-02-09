export default function AboutLayout({ children }) {
    return (
      <section style={{ display: "flex", gap: "20px" }}>
        <div style={{ width: "200px" }}>
          <p>contact form</p>

        </div>
  
        <div>{children}</div>
      </section>
    );
  }
  
 
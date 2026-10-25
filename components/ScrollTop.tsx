"use client";

export default function ScrollTop() {
  return (
    <a
      href="#inicio"
      className="brand"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", location.pathname);
      }}
    >
      <span className="badge">FR</span>
      <span className="bn">Francisco Ramos</span>
    </a>
  );
}

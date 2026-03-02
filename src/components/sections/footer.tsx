export function Footer() {
  return (
    <footer className="border-t border-[var(--gray-3)]">
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-6 lg:px-0">
        <p className="text-[12px] text-[var(--gray-6)]">
          &copy; {new Date().getFullYear()} Naim Uddin Arafat
        </p>
        <a
          href="https://www.opale-ui.design/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[var(--gray-6)] transition-colors duration-200 hover:text-[var(--gray-9)]"
        >
          Designed by Opale UI
        </a>
      </div>
    </footer>
  );
}

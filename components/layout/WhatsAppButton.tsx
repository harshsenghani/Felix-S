const phoneNumber = "919967554054";
const message =
  "Hi Felix Solutions, I saw your website and would like to know more about your coding and marking solutions. Could you please share more details and help me with a quote?";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Felix Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-[#394285] text-white shadow-[0_8px_24px_rgba(33,34,44,0.24)] transition duration-200 hover:scale-105 hover:bg-[#2f376f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#394285]/30 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-current sm:h-8 sm:w-8">
        <path d="M16.02 3C8.84 3 3 8.81 3 15.96c0 2.28.6 4.51 1.74 6.48L3 29l6.75-1.7a13.1 13.1 0 0 0 6.27 1.6h.01C23.2 28.9 29 23.09 29 15.94 29 12.48 27.65 9.22 25.2 6.78A13 13 0 0 0 16.02 3Zm0 24.03h-.01a10.9 10.9 0 0 1-5.55-1.52l-.4-.24-4.01 1.01 1.07-3.9-.26-.41a10.8 10.8 0 0 1-1.66-5.8c0-5.98 4.88-10.84 10.88-10.84 2.9 0 5.63 1.13 7.68 3.18a10.76 10.76 0 0 1 3.18 7.67c0 5.98-4.88 10.85-10.92 10.85Zm5.97-8.12c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.28-.19.21-.39.24-.72.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.32.33-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.77-1.02-2.43-.27-.63-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.21 2.32 3.53 5.62 4.95.79.34 1.4.55 1.88.7.79.25 1.51.21 2.08.13.64-.1 1.94-.8 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.13-.3-.21-.63-.37Z" />
      </svg>
    </a>
  );
}

type WhatsAppOptions = {
  text?: string;
};

function sanitizePhoneNumber(raw: string): string {
  // Keep digits only (e.g. "+91 98765 43210" -> "919876543210")
  const digits = raw.replace(/\D/g, '');

  // If a placeholder like 91XXXXXXXXXX sneaks in, treat it as unset.
  if (/x/i.test(raw)) return '';

  // Basic sanity: WhatsApp numbers are typically 8-15 digits.
  if (digits.length < 8 || digits.length > 15) return '';

  return digits;
}

export function getWhatsAppHref(options: WhatsAppOptions = {}): string {
  const message = options.text?.trim() ?? '';
  const encodedText = encodeURIComponent(message);

  const configured = (import.meta as any).env?.VITE_WHATSAPP_NUMBER as string | undefined;
  const phone = sanitizePhoneNumber(configured ?? '');

  // If a business number is configured, open a direct chat.
  if (phone) {
    return message ? `https://wa.me/${phone}?text=${encodedText}` : `https://wa.me/${phone}`;
  }

  // Fallback: open WhatsApp share (user picks a recipient).
  return message ? `https://wa.me/?text=${encodedText}` : 'https://wa.me/';
}

export function openWhatsApp(options: WhatsAppOptions = {}): void {
  const href = getWhatsAppHref(options);
  window.open(href, '_blank', 'noopener,noreferrer');
}

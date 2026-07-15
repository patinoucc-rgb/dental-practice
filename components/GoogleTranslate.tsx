"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  useEffect(() => {
    // Detect browser language
    const lang = navigator.language.toLowerCase();
    const isSpanish = lang.startsWith('es');
    
    // Auto-set the Google Translate cookie if Spanish is detected
    // This forces the widget to translate the page immediately without user interaction
    if (isSpanish && document.cookie.indexOf("googtrans") === -1) {
      document.cookie = "googtrans=/en/es; path=/; domain=" + window.location.hostname;
      document.cookie = "googtrans=/en/es; path=/;";
    }
  }, []);

  return (
    <>
      <div id="google_translate_element" className="hidden"></div>
      <Script
        id="google-translate-script"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              { pageLanguage: 'en', autoDisplay: false },
              'google_translate_element'
            );
          }
        `}
      </Script>
      {/* Hide the annoying top banner that Google Translate sometimes adds */}
      <style dangerouslySetInnerHTML={{__html: `
        .skiptranslate iframe { display: none !important; }
        body { top: 0 !important; }
      `}} />
    </>
  );
}

/**
 * Utility to process the Professional Résumé for printing / saving as PDF.
 * Temporarily sets document.title to "Fran Steven" so that the browser's
 * PDF export dialog defaults the filename to "Fran Steven.pdf".
 */
export const handlePrintResume = () => {
  const originalTitle = document.title;
  document.title = 'Fran Steven';

  const restore = () => {
    document.title = originalTitle;
    window.removeEventListener('afterprint', restore);
  };

  window.addEventListener('afterprint', restore);
  // Fallback timeout in case afterprint does not fire in certain preview environments
  setTimeout(restore, 3000);

  window.print();
};

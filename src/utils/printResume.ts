/**
 * Utility to process the Professional Résumé for download and printing.
 */

/**
 * Directly downloads the authentic, standards-compliant "Fran Steven.pdf" file.
 * This does NOT open the print dialog, allowing immediate opening in
 * WPS Office, Microsoft Word, Adobe Acrobat, and all standard PDF readers.
 */
export const downloadResumePdf = async () => {
  try {
    const response = await fetch('/Fran%20Steven.pdf');
    if (response.ok) {
      const blob = await response.blob();
      // Ensure application/pdf type
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const blobUrl = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      a.download = 'Fran Steven.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        if (a.parentNode) {
          a.parentNode.removeChild(a);
        }
      }, 1000);
      return;
    }
  } catch (e) {
    console.warn('Direct blob download fallback:', e);
  }

  // Direct anchor download fallback
  const a = document.createElement('a');
  a.href = '/Fran%20Steven.pdf';
  a.download = 'Fran Steven.pdf';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    if (a.parentNode) {
      a.parentNode.removeChild(a);
    }
  }, 500);
};

/**
 * Directly downloads the authentic Microsoft Word & WPS compatible "Fran Steven.docx" document.
 */
export const downloadResumeDocx = async () => {
  try {
    const response = await fetch('/Fran%20Steven.docx');
    if (response.ok) {
      const blob = await response.blob();
      const docxBlob = new Blob([blob], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      const blobUrl = window.URL.createObjectURL(docxBlob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      a.download = 'Fran Steven.docx';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        if (a.parentNode) {
          a.parentNode.removeChild(a);
        }
      }, 1000);
      return;
    }
  } catch (e) {
    console.warn('Direct docx blob download fallback:', e);
  }

  const a = document.createElement('a');
  a.href = '/Fran%20Steven.docx';
  a.download = 'Fran Steven.docx';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    if (a.parentNode) {
      a.parentNode.removeChild(a);
    }
  }, 500);
};

/**
 * Dedicated function for physical printing only (invoked only when user explicitly clicks 'Print').
 */
export const handlePrintResume = () => {
  const originalTitle = document.title;
  document.title = 'Fran Steven';

  const restore = () => {
    document.title = originalTitle;
    window.removeEventListener('afterprint', restore);
  };

  window.addEventListener('afterprint', restore);
  setTimeout(restore, 3000);

  window.print();
};


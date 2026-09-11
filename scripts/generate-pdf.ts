import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();

  // Philippine Standard Long Bond Paper: 8.5in x 13in (612 x 936 points)
  const width = 612;
  const height = 936;
  const page = pdfDoc.addPage([width, height]);

  // Set document metadata for Word / WPS / Acrobat
  pdfDoc.setTitle('Fran Steven - Résumé');
  pdfDoc.setAuthor('Steven P. Fran');
  pdfDoc.setSubject('Professional Résumé of Steven P. Fran - BSIT Student & System Developer');
  pdfDoc.setKeywords(['Steven Fran', 'Resume', 'BSIT', 'System Developer', 'Innovative College of Science & Information Technology']);
  pdfDoc.setProducer('Steven Fran Portfolio');
  pdfDoc.setCreator('Steven Fran Portfolio');

  // Embed standard clean fonts (Universal across Windows, Mac, Linux, WPS, Word)
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontHelveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const colorBannerBg = rgb(238 / 255, 242 / 255, 246 / 255); // #EEF2F6
  const colorNavy = rgb(22 / 255, 45 / 255, 74 / 255);         // #162D4A
  const colorWhite = rgb(1, 1, 1);
  const colorSlateDark = rgb(15 / 255, 23 / 255, 42 / 255);   // #0F172A
  const colorSlateMuted = rgb(71 / 255, 85 / 255, 105 / 255); // #475569
  const colorSlateLight = rgb(226 / 255, 232 / 255, 240 / 255); // #E2E8F0
  const colorTeal = rgb(20 / 255, 184 / 255, 166 / 255);       // #14B8A6
  const colorDivider = rgb(203 / 255, 213 / 255, 225 / 255);   // #CBD5E1

  // Top banner height: 120pt
  const bannerHeight = 120;
  const bannerY = height - bannerHeight;

  // Draw Banner Background
  page.drawRectangle({
    x: 0,
    y: bannerY,
    width: width,
    height: bannerHeight,
    color: colorBannerBg,
  });

  // Draw Banner Bottom Border
  page.drawLine({
    start: { x: 0, y: bannerY },
    end: { x: width, y: bannerY },
    thickness: 1,
    color: colorDivider,
  });

  // Embed Steven's Portrait Photo
  const photoPath = path.join(process.cwd(), 'public', 'steven-fran-photo.jpg');
  if (fs.existsSync(photoPath)) {
    const photoBytes = fs.readFileSync(photoPath);
    const photoImage = await pdfDoc.embedJpg(photoBytes);
    
    // Photo coordinates & size
    const photoSize = 84;
    const photoX = 40;
    const photoY = bannerY + (bannerHeight - photoSize) / 2;

    // Outer white border circle/square background
    page.drawRectangle({
      x: photoX - 3,
      y: photoY - 3,
      width: photoSize + 6,
      height: photoSize + 6,
      color: colorWhite,
    });

    // Draw photo
    page.drawImage(photoImage, {
      x: photoX,
      y: photoY,
      width: photoSize,
      height: photoSize,
    });
  }

  // Banner Text (Name & Title on Right)
  const nameX = width - 40;
  const line1 = 'FRAN,';
  const line2 = 'STEVEN P.';
  const degree = 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (BSIT)';

  const l1Width = fontHelveticaBold.widthOfTextAtSize(line1, 26);
  page.drawText(line1, {
    x: nameX - l1Width,
    y: bannerY + 75,
    size: 26,
    font: fontHelveticaBold,
    color: colorNavy,
  });

  const l2Width = fontHelveticaBold.widthOfTextAtSize(line2, 26);
  page.drawText(line2, {
    x: nameX - l2Width,
    y: bannerY + 46,
    size: 26,
    font: fontHelveticaBold,
    color: colorNavy,
  });

  const degWidth = fontHelvetica.widthOfTextAtSize(degree, 8.5);
  page.drawText(degree, {
    x: nameX - degWidth,
    y: bannerY + 28,
    size: 8.5,
    font: fontHelvetica,
    color: colorSlateMuted,
  });

  // --- TWO COLUMNS ---
  const leftColWidth = 230;
  const rightColWidth = width - leftColWidth; // 382
  const bodyHeight = bannerY;

  // Draw Left Column Background (Navy)
  page.drawRectangle({
    x: 0,
    y: 0,
    width: leftColWidth,
    height: bodyHeight,
    color: colorNavy,
  });

  // Draw Right Column Background (White)
  page.drawRectangle({
    x: leftColWidth,
    y: 0,
    width: rightColWidth,
    height: bodyHeight,
    color: colorWhite,
  });

  // ==========================================
  // LEFT COLUMN CONTENT (x: 24 to 210)
  // ==========================================
  let curY = bodyHeight - 32;
  const leftX = 24;
  const leftInnerWidth = leftColWidth - 48;

  const drawLeftHeading = (title: string) => {
    page.drawText(title, {
      x: leftX,
      y: curY,
      size: 10.5,
      font: fontHelveticaBold,
      color: colorWhite,
    });
    curY -= 6;
    page.drawLine({
      start: { x: leftX, y: curY },
      end: { x: leftX + leftInnerWidth, y: curY },
      thickness: 0.75,
      color: rgb(80 / 255, 105 / 255, 138 / 255),
    });
    curY -= 14;
  };

  // 1. CONTACT ME
  drawLeftHeading('CONTACT ME');

  page.drawText('Phone:', { x: leftX, y: curY, size: 8.5, font: fontHelveticaBold, color: colorTeal });
  curY -= 11;
  page.drawText('09936924735', { x: leftX + 8, y: curY, size: 8.5, font: fontHelvetica, color: colorSlateLight });
  curY -= 14;

  page.drawText('Email:', { x: leftX, y: curY, size: 8.5, font: fontHelveticaBold, color: colorTeal });
  curY -= 11;
  page.drawText('stevennarf17@gmail.com', { x: leftX + 8, y: curY, size: 8.5, font: fontHelvetica, color: colorSlateLight });
  curY -= 14;

  page.drawText('Address:', { x: leftX, y: curY, size: 8.5, font: fontHelveticaBold, color: colorTeal });
  curY -= 11;
  page.drawText('Barangay Pulosahi,', { x: leftX + 8, y: curY, size: 8.5, font: fontHelvetica, color: colorSlateLight });
  curY -= 11;
  page.drawText('Bongabong, Oriental Mindoro', { x: leftX + 8, y: curY, size: 8.5, font: fontHelvetica, color: colorSlateLight });
  curY -= 11;
  page.drawText('5211', { x: leftX + 8, y: curY, size: 8.5, font: fontHelvetica, color: colorSlateLight });
  curY -= 24;

  // 2. EDUCATION
  drawLeftHeading('EDUCATION');

  page.drawText('Innovative College of Science', { x: leftX, y: curY, size: 8.5, font: fontHelveticaBold, color: colorWhite });
  curY -= 11;
  page.drawText('& Information Technology', { x: leftX, y: curY, size: 8.5, font: fontHelveticaBold, color: colorWhite });
  curY -= 12;
  page.drawText('Bachelor of Science in Information', { x: leftX, y: curY, size: 8, font: fontHelvetica, color: colorSlateLight });
  curY -= 10;
  page.drawText('Technology (BSIT)', { x: leftX, y: curY, size: 8, font: fontHelvetica, color: colorSlateLight });
  curY -= 12;
  page.drawText('2023 - 2027', { x: leftX, y: curY, size: 8.5, font: fontHelveticaBold, color: colorTeal });
  curY -= 24;

  // 3. TECHNICAL SKILLS
  drawLeftHeading('TECHNICAL SKILLS');

  const skills = [
    { cat: 'Programming Languages:', list: 'Java, Basic JavaScript' },
    { cat: 'Web Development:', list: 'HTML, CSS' },
    { cat: 'Database Management:', list: 'MySQL' },
    { cat: 'Software & Tools:', list: 'Microsoft Office (Word, Excel,\nPowerPoint), VS Code, XAMPP, Canva' },
    { cat: 'Other IT Skills:', list: 'Basic Computer Troubleshooting,\nData Encoding, Basic Networking' },
  ];

  for (const skill of skills) {
    page.drawText(`* ${skill.cat}`, { x: leftX, y: curY, size: 8.5, font: fontHelveticaBold, color: colorWhite });
    curY -= 11;
    const lines = skill.list.split('\n');
    for (const l of lines) {
      page.drawText(l, { x: leftX + 10, y: curY, size: 8, font: fontHelvetica, color: colorSlateLight });
      curY -= 11;
    }
    curY -= 3;
  }
  curY -= 12;

  // 4. CERTIFICATES AND TRAINING
  drawLeftHeading('CERTIFICATES AND TRAINING');

  const certs = [
    'Introduction to Modern AI',
    'IT Customer Support Basics',
    'Digital Safety and Security Awareness',
  ];

  for (const cert of certs) {
    page.drawText('*', { x: leftX, y: curY, size: 8, font: fontHelveticaBold, color: colorTeal });
    page.drawText(cert, { x: leftX + 10, y: curY, size: 8, font: fontHelvetica, color: colorSlateLight });
    curY -= 14;
  }

  // ==========================================
  // RIGHT COLUMN CONTENT (x: 255 to 580)
  // ==========================================
  let rCurY = bodyHeight - 32;
  const rightX = leftColWidth + 26;
  const rightInnerWidth = rightColWidth - 52;

  const drawRightHeading = (title: string) => {
    page.drawText(title, {
      x: rightX,
      y: rCurY,
      size: 11,
      font: fontHelveticaBold,
      color: colorNavy,
    });
    const titleWidth = fontHelveticaBold.widthOfTextAtSize(title, 11);
    page.drawLine({
      start: { x: rightX + titleWidth + 10, y: rCurY + 3 },
      end: { x: rightX + rightInnerWidth, y: rCurY + 3 },
      thickness: 0.75,
      color: colorDivider,
    });
    rCurY -= 16;
  };

  // Helper to wrap text
  const drawWrappedText = (
    text: string,
    x: number,
    maxWidth: number,
    fontSize: number,
    font = fontHelvetica,
    color = colorSlateDark,
    lineHeight = 12
  ) => {
    const words = text.split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? ' ' : '') + words[i];
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxWidth && i > 0) {
        page.drawText(line, { x, y: rCurY, size: fontSize, font, color });
        rCurY -= lineHeight;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x, y: rCurY, size: fontSize, font, color });
      rCurY -= lineHeight;
    }
  };

  // 1. CAREER OBJECTIVE
  drawRightHeading('CAREER OBJECTIVE:');
  const objectiveText =
    "I am a Bachelor of Science in Information Technology (BSIT) student seeking an entry-level IT Staff / IT Support / Junior Developer position. I am eager to apply my knowledge in computer systems, programming, and technology to help your team and contribute to the company's growth. I am hardworking, willing to learn quickly, and ready to do my best in every task given to me.";
  drawWrappedText(objectiveText, rightX, rightInnerWidth, 8.5, fontHelvetica, colorSlateDark, 12.5);
  rCurY -= 16;

  // 2. ACADEMIC / CAPSTONE PROJECT
  drawRightHeading('ACADEMIC / CAPSTONE PROJECT:');

  page.drawText('Project Name: Barangay Management System', {
    x: rightX,
    y: rCurY,
    size: 9.5,
    font: fontHelveticaBold,
    color: colorNavy,
  });
  rCurY -= 13;

  page.drawText('Role: ', { x: rightX, y: rCurY, size: 8.5, font: fontHelveticaBold, color: colorSlateDark });
  page.drawText('System Developer & Programmer', {
    x: rightX + 28,
    y: rCurY,
    size: 8.5,
    font: fontHelvetica,
    color: colorSlateDark,
  });
  rCurY -= 16;

  // Tools & Technologies Used
  page.drawText('Tools & Technologies Used:', {
    x: rightX,
    y: rCurY,
    size: 9,
    font: fontHelveticaBold,
    color: colorNavy,
  });
  rCurY -= 13;

  const techStack = [
    { label: 'Programming:', value: 'Java' },
    { label: 'Web Interface:', value: 'HTML, CSS' },
    { label: 'Database:', value: 'MySQL' },
    { label: 'Tools:', value: 'Visual Studio Code, XAMPP' },
  ];

  for (const tech of techStack) {
    page.drawCircle({ x: rightX + 6, y: rCurY + 3, size: 1.8, color: colorNavy });
    page.drawText(tech.label, { x: rightX + 14, y: rCurY, size: 8.5, font: fontHelveticaBold, color: colorSlateDark });
    const lblW = fontHelveticaBold.widthOfTextAtSize(tech.label, 8.5);
    page.drawText(tech.value, { x: rightX + 18 + lblW, y: rCurY, size: 8.5, font: fontHelvetica, color: colorSlateMuted });
    rCurY -= 12;
  }
  rCurY -= 10;

  // Action & Result
  page.drawText('Action & Result:', {
    x: rightX,
    y: rCurY,
    size: 9,
    font: fontHelveticaBold,
    color: colorNavy,
  });
  rCurY -= 14;

  const points = [
    {
      title: 'Purpose: ',
      body: 'The system was built to make recording and managing barangay records faster and easier replacing manual writing in logbooks to avoid lost files and slow processing.',
    },
    {
      title: 'My Contribution: ',
      body: 'I developed the database design, created the forms for adding/editing resident info, and wrote the code to connect the system to the database.',
    },
    {
      title: 'Outcome: ',
      body: 'The system can now store resident records, issue clearance requests, and generate reports quickly. It is organized, easy to use, and reduced errors in recording data.',
    },
  ];

  for (const pt of points) {
    page.drawCircle({ x: rightX + 6, y: rCurY + 3, size: 1.8, color: colorNavy });
    const fullText = pt.title + pt.body;
    // Draw with title bold
    const prefixW = fontHelveticaBold.widthOfTextAtSize(pt.title, 8.5);
    page.drawText(pt.title, { x: rightX + 14, y: rCurY, size: 8.5, font: fontHelveticaBold, color: colorNavy });
    
    // Wrap the rest of the text
    const words = pt.body.split(' ');
    let line = '';
    let isFirstLine = true;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? ' ' : '') + words[i];
      const availWidth = isFirstLine ? rightInnerWidth - 14 - prefixW : rightInnerWidth - 14;
      const testWidth = fontHelvetica.widthOfTextAtSize(testLine, 8.5);
      if (testWidth > availWidth && line !== '') {
        page.drawText(line, {
          x: isFirstLine ? rightX + 14 + prefixW : rightX + 14,
          y: rCurY,
          size: 8.5,
          font: fontHelvetica,
          color: colorSlateDark,
        });
        rCurY -= 12;
        line = words[i];
        isFirstLine = false;
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, {
        x: isFirstLine ? rightX + 14 + prefixW : rightX + 14,
        y: rCurY,
        size: 8.5,
        font: fontHelvetica,
        color: colorSlateDark,
      });
      rCurY -= 12;
    }
    rCurY -= 6;
  }

  // Footer note on right side
  page.drawLine({
    start: { x: rightX, y: 28 },
    end: { x: rightX + rightInnerWidth, y: 28 },
    thickness: 0.5,
    color: colorDivider,
  });

  page.drawText('Fran Steven.pdf', {
    x: rightX,
    y: 16,
    size: 7.5,
    font: fontHelveticaOblique,
    color: colorSlateMuted,
  });

  page.drawText('Folio / Long Bond Paper (8.5" x 13")', {
    x: rightX + rightInnerWidth - fontHelvetica.widthOfTextAtSize('Folio / Long Bond Paper (8.5" x 13")', 7.5),
    y: 16,
    size: 7.5,
    font: fontHelvetica,
    color: colorSlateMuted,
  });

  // Save PDF bytes
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'Fran Steven.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  const fallbackPath = path.join(process.cwd(), 'public', 'Fran-Steven.pdf');
  fs.writeFileSync(fallbackPath, pdfBytes);
  console.log('Successfully generated public/Fran Steven.pdf, size:', pdfBytes.length);
}

generateResumePdf().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});

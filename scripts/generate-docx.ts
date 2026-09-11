import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  convertInchesToTwip,
  ShadingType,
  ImageRun,
} from 'docx';
import fs from 'fs';
import path from 'path';

async function generateDocx() {
  const photoPath = path.join(process.cwd(), 'public', 'steven-fran-photo.jpg');
  let photoData: Buffer | null = null;
  if (fs.existsSync(photoPath)) {
    photoData = fs.readFileSync(photoPath);
  }

  // Define doc
  const doc = new Document({
    creator: 'Steven P. Fran',
    title: 'Fran Steven - Résumé',
    description: 'Professional Résumé of Steven P. Fran - BSIT Student & System Developer',
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.5),
              bottom: convertInchesToTwip(0.5),
              left: convertInchesToTwip(0.5),
              right: convertInchesToTwip(0.5),
            },
          },
        },
        children: [
          // Header Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.SINGLE, size: 6, color: 'CBD5E1' },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
              insideHorizontal: { style: BorderStyle.NONE },
              insideVertical: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  // Photo Cell
                  new TableCell({
                    width: { size: 25, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: 'EEF2F6' },
                    borders: {
                      top: { style: BorderStyle.NONE },
                      bottom: { style: BorderStyle.NONE },
                      left: { style: BorderStyle.NONE },
                      right: { style: BorderStyle.NONE },
                    },
                    children: [
                      photoData
                        ? new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                              new ImageRun({
                                data: photoData,
                                transformation: { width: 90, height: 110 },
                                type: 'jpg',
                              }),
                            ],
                          })
                        : new Paragraph({ text: '' }),
                    ],
                  }),
                  // Name and Degree Cell
                  new TableCell({
                    width: { size: 75, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: 'EEF2F6' },
                    borders: {
                      top: { style: BorderStyle.NONE },
                      bottom: { style: BorderStyle.NONE },
                      left: { style: BorderStyle.NONE },
                      right: { style: BorderStyle.NONE },
                    },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                          new TextRun({
                            text: 'FRAN, STEVEN P.',
                            bold: true,
                            size: 34,
                            color: '162D4A',
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                          new TextRun({
                            text: 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (BSIT)',
                            size: 18,
                            color: '475569',
                            font: 'Arial',
                            bold: true,
                          }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                          new TextRun({
                            text: 'Innovative College of Science & Information Technology | 2023 - 2027',
                            size: 16,
                            color: '64748B',
                            font: 'Arial',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          new Paragraph({ text: '' }),

          // Two-column layout via Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
              insideHorizontal: { style: BorderStyle.NONE },
              insideVertical: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  // Left Column: Contact, Education, Skills, Certifications
                  new TableCell({
                    width: { size: 40, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: '162D4A' },
                    borders: {
                      top: { style: BorderStyle.NONE },
                      bottom: { style: BorderStyle.NONE },
                      left: { style: BorderStyle.NONE },
                      right: { style: BorderStyle.NONE },
                    },
                    children: [
                      // CONTACT ME
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'CONTACT ME',
                            bold: true,
                            color: 'FFFFFF',
                            size: 20,
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Phone: ', bold: true, color: '2DD4BF', size: 16 }),
                          new TextRun({ text: '09936924735', color: 'E2E8F0', size: 16 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Email: ', bold: true, color: '2DD4BF', size: 16 }),
                          new TextRun({ text: 'stevennarf17@gmail.com', color: 'E2E8F0', size: 16 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Address: ', bold: true, color: '2DD4BF', size: 16 }),
                          new TextRun({
                            text: 'Brgy. Pulosahi, Bongabong, Oriental Mindoro 5211',
                            color: 'E2E8F0',
                            size: 16,
                          }),
                        ],
                      }),
                      new Paragraph({ text: '' }),

                      // EDUCATION
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'EDUCATION',
                            bold: true,
                            color: 'FFFFFF',
                            size: 20,
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'Innovative College of Science & Information Technology',
                            bold: true,
                            color: 'FFFFFF',
                            size: 16,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'Bachelor of Science in Information Technology (BSIT)',
                            color: 'CBD5E1',
                            size: 15,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: '2023 - 2027',
                            bold: true,
                            color: '2DD4BF',
                            size: 16,
                          }),
                        ],
                      }),
                      new Paragraph({ text: '' }),

                      // TECHNICAL SKILLS
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'TECHNICAL SKILLS',
                            bold: true,
                            color: 'FFFFFF',
                            size: 20,
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Programming: ', bold: true, color: 'FFFFFF', size: 15 }),
                          new TextRun({ text: 'Java, Basic JavaScript', color: 'CBD5E1', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Web Development: ', bold: true, color: 'FFFFFF', size: 15 }),
                          new TextRun({ text: 'HTML, CSS', color: 'CBD5E1', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Database: ', bold: true, color: 'FFFFFF', size: 15 }),
                          new TextRun({ text: 'MySQL', color: 'CBD5E1', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Software & Tools: ', bold: true, color: 'FFFFFF', size: 15 }),
                          new TextRun({
                            text: 'MS Office (Word, Excel, PowerPoint), VS Code, XAMPP, Canva',
                            color: 'CBD5E1',
                            size: 15,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Other IT Skills: ', bold: true, color: 'FFFFFF', size: 15 }),
                          new TextRun({
                            text: 'Troubleshooting, Data Encoding, Basic Networking',
                            color: 'CBD5E1',
                            size: 15,
                          }),
                        ],
                      }),
                      new Paragraph({ text: '' }),

                      // CERTIFICATES
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'CERTIFICATES & TRAINING',
                            bold: true,
                            color: 'FFFFFF',
                            size: 20,
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Introduction to Modern AI', color: 'CBD5E1', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• IT Customer Support Basics', color: 'CBD5E1', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Digital Safety and Security Awareness', color: 'CBD5E1', size: 15 }),
                        ],
                      }),
                    ],
                  }),

                  // Right Column: Objective, Capstone, Contributions
                  new TableCell({
                    width: { size: 60, type: WidthType.PERCENTAGE },
                    borders: {
                      top: { style: BorderStyle.NONE },
                      bottom: { style: BorderStyle.NONE },
                      left: { style: BorderStyle.NONE },
                      right: { style: BorderStyle.NONE },
                    },
                    children: [
                      // CAREER OBJECTIVE
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'CAREER OBJECTIVE',
                            bold: true,
                            color: '162D4A',
                            size: 20,
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text:
                              "I am a Bachelor of Science in Information Technology (BSIT) student seeking an entry-level IT Staff / IT Support / Junior Developer position. I am eager to apply my knowledge in computer systems, programming, and technology to help your team and contribute to the company's growth. I am hardworking, willing to learn quickly, and ready to do my best in every task given to me.",
                            color: '334155',
                            size: 17,
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({ text: '' }),

                      // ACADEMIC / CAPSTONE PROJECT
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'ACADEMIC / CAPSTONE PROJECT',
                            bold: true,
                            color: '162D4A',
                            size: 20,
                            font: 'Arial',
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'Project: Barangay Management System',
                            bold: true,
                            color: '162D4A',
                            size: 18,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Role: ', bold: true, color: '0F172A', size: 16 }),
                          new TextRun({ text: 'System Developer & Programmer', color: '334155', size: 16 }),
                        ],
                      }),
                      new Paragraph({ text: '' }),

                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'Tools & Technologies Used:',
                            bold: true,
                            color: '162D4A',
                            size: 16,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Programming: ', bold: true, color: '0F172A', size: 15 }),
                          new TextRun({ text: 'Java', color: '475569', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Web Interface: ', bold: true, color: '0F172A', size: 15 }),
                          new TextRun({ text: 'HTML, CSS', color: '475569', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Database: ', bold: true, color: '0F172A', size: 15 }),
                          new TextRun({ text: 'MySQL', color: '475569', size: 15 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Tools: ', bold: true, color: '0F172A', size: 15 }),
                          new TextRun({ text: 'Visual Studio Code, XAMPP', color: '475569', size: 15 }),
                        ],
                      }),
                      new Paragraph({ text: '' }),

                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'Action & Result:',
                            bold: true,
                            color: '162D4A',
                            size: 16,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Purpose: ', bold: true, color: '0F172A', size: 15 }),
                          new TextRun({
                            text:
                              'The system was built to make recording and managing barangay records faster and easier, replacing manual writing in logbooks to avoid lost files and slow processing.',
                            color: '475569',
                            size: 15,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• My Contribution: ', bold: true, color: '0F172A', size: 15 }),
                          new TextRun({
                            text:
                              'I developed the database design, created the forms for adding/editing resident info, and wrote the code to connect the system to the database.',
                            color: '475569',
                            size: 15,
                          }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: '• Outcome: ', bold: true, color: '0F172A', size: 15 }),
                          new TextRun({
                            text:
                              'The system can now store resident records, issue clearance requests, and generate reports quickly. It is organized, easy to use, and reduced errors in recording data.',
                            color: '475569',
                            size: 15,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outDocx = path.join(process.cwd(), 'public', 'Fran Steven.docx');
  fs.writeFileSync(outDocx, buffer);
  const outDocxFallback = path.join(process.cwd(), 'public', 'Fran-Steven.docx');
  fs.writeFileSync(outDocxFallback, buffer);
  console.log('Successfully generated public/Fran Steven.docx, size:', buffer.length);
}

generateDocx().catch((err) => {
  console.error('Error generating DOCX:', err);
  process.exit(1);
});

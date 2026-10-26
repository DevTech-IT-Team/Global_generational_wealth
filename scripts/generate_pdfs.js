import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicResourcesDir = path.join(__dirname, '..', 'public', 'resources');

if (!fs.existsSync(publicResourcesDir)) {
  fs.mkdirSync(publicResourcesDir, { recursive: true });
}

const resources = [
  {
    fileName: 'corporate-credit-playbook-2026.pdf',
    title: 'THE CORPORATE CREDIT & 0% APR BLUEPRINT',
    subtitle: 'Institutional Guide to Building Tier-1 to Tier-3 Commercial Profiles',
    edition: '2026 Edition (v2.4)',
    sections: [
      {
        heading: '1. Executive Summary & Paradigm Shift',
        body: 'Building commercial credit allows business entities to acquire substantial capital, trade lines, and vehicle/equipment leasing without encumbering personal credit scores or executing personal guarantees. Global Generational Wealth structures corporate profiles according to the exact compliance requirements of major credit bureaus: Dun & Bradstreet, Experian Business, and Equifax Commercial.'
      },
      {
        heading: '2. Tier 1: Net-30 Vendor Accounts Foundation',
        body: 'Tier 1 is the launchpad. We establish 5 to 7 vendor trade lines with reputable national suppliers that report promptly to D&B and Experian. Invoices must be settled early (within 10-15 days) to generate a top-tier PAYDEX score of 80 or above.'
      },
      {
        heading: '3. Tier 2: Revolving Store & Fleet Lines',
        body: 'Once 5 trade lines are reporting on your D&B profile and your PAYDEX score is established, the entity graduates to Tier 2 revolving store credit and corporate fleet cards (Home Depot Commercial, Lowe’s Pro, Shell Fleet, Amazon Corporate Revolving) without personal liability.'
      },
      {
        heading: '4. Tier 3 & Institutional Banking: 0% APR Facilities',
        body: 'With a seasoned profile and strong bank rating (maintaining a minimum low-5 to mid-5 average daily balance), entities can unlock $50,000 to $250,000+ in 0% introductory APR business lines, enabling zero-cost leverage to scale operations and acquire performing assets.'
      }
    ]
  },
  {
    fileName: 'ubot-asset-protection-guide-2026.pdf',
    title: 'UBOT & PRIVATE TRUST STRUCTURING HANDBOOK',
    subtitle: 'Common-Law Entity Structuring & Multi-Generational Asset Shielding',
    edition: '2026 Edition (v2.1)',
    sections: [
      {
        heading: '1. The Constitutional Foundation of Private Trusts',
        body: 'An Unincorporated Business Organization Trust (UBOT) is founded upon Article I, Section 10 of the United States Constitution (the right to contract). By establishing a private fiduciary entity governed by American jurisprudence and private contract law, assets are held in trust, creating an impenetrable layer of separation between ownership and equitable benefit.'
      },
      {
        heading: '2. Bifurcation of Title: Legal vs. Equitable',
        body: 'Under traditional corporate frameworks (LLCs, Corporations), charging orders and personal litigation can jeopardize company equity. A properly settled Trust bifurcates legal title (held by the Trustee) from beneficial enjoyment (held by the Beneficiaries). You own nothing personally, yet control and benefit through legitimate fiduciary administration.'
      },
      {
        heading: '3. Commercial Banking & Private Trust Operations',
        body: 'Operating bank accounts in the name of a private trust entity requires meticulous preparation of Certificates of Trust, EIN assignment under fiduciary status, and adherence to FinCEN guidelines. Global Generational Wealth provides the precise documentation blueprints for seamless institutional acceptance.'
      },
      {
        heading: '4. Multi-Generational Succession Without Probate',
        body: 'Unlike statutory wills or state-registered entities subject to probate court proceedings and public disclosures, private trust indentures pass governance seamlessly to successor trustees upon designated milestones—ensuring total continuity, confidentiality, and tax-efficient wealth preservation.'
      }
    ]
  },
  {
    fileName: 'commercial-funding-handbook-2026.pdf',
    title: 'COMMERCIAL LENDER UNDERWRITING DECODED',
    subtitle: 'The Internal Rulebook of Tier-1 Institutional Underwriters',
    edition: '2026 Edition (v1.8)',
    sections: [
      {
        heading: '1. Understanding Automated Underwriting Systems (AUS)',
        body: 'Over 92% of business loan and credit card approvals under $250,000 are evaluated entirely by automated algorithms rather than human underwriters. Understanding how risk scoring engines evaluate debt-service coverage ratio (DSCR), entity age, and industry risk is essential to achieving swift, unencumbered approvals.'
      },
      {
        heading: '2. The Critical Bank Rating Matrix',
        body: 'Banks assign your business an internal rating based on the lowest balance maintained over a 90-day rolling cycle. A "Low 5" rating represents a minimum balance of $10,000-$39,999, while a "Mid 5" rating represents $40,000-$69,999. Knowing how to maintain consistent depository cycles unlocks 3x to 5x higher automated credit limits.'
      },
      {
        heading: '3. High-Risk SIC/NAICS Classification Hazards',
        body: 'Lenders flag specific industry codes (real estate investing, credit repair, automotive sales, logistics) as inherently elevated risk. Structuring your business purpose and filing primary NAICS codes focused on corporate management, business consulting, or software advisory ensures immediate compliance passing.'
      },
      {
        heading: '4. Packaging the Institutional Lending Dossier',
        body: 'A bulletproof lending dossier includes compliant Articles of Organization/Trust Indenture, Certificate of Good Standing, commercial bank statements demonstrating steady cash flow, and clear bureau reporting. Our team prepares clients to present a clean profile ready for instant underwriting approval.'
      }
    ]
  },
  {
    fileName: 'business-fundability-checklist-2026.pdf',
    title: 'THE 25-POINT BUSINESS FUNDABILITY & PRESENCE AUDIT',
    subtitle: 'Essential Verification Checklist for Maximum Lending Approvals',
    edition: '2026 Edition (v3.0)',
    sections: [
      {
        heading: '1. Corporate Identity & Entity Verification',
        body: 'Ensure exact legal name matching across Secretary of State filing, IRS EIN confirmation letter (CP 575), and city/county business licenses. Any punctuation or abbreviation discrepancies (e.g., "LLC" vs "L.L.C.") trigger manual underwriting pauses.'
      },
      {
        heading: '2. Professional Communications & Digital Footprint',
        body: 'Commercial lenders require a dedicated 800 or toll-free telephone number registered with national 411 directory assistance. The company must operate an active commercial domain with branded corporate emails (never free Gmail/Yahoo addresses) and an informative corporate web presence.'
      },
      {
        heading: '3. Commercial Address Standards',
        body: 'PO Boxes, UPS Stores, and residential addresses immediately disqualify businesses from tier-1 unsecured lines. A verified commercial office address or certified executive suite with physical mail handling and directory signage is mandatory.'
      },
      {
        heading: '4. Commercial Credit Bureau Registrations',
        body: 'Active DUNS number registration through Dun & Bradstreet, Experian Commercial account initialization, and Equifax Business presence must be verified and active prior to submitting any major institutional capital applications.'
      }
    ]
  }
];

async function createResourcePdf(res) {
  const pdfDoc = await PDFDocument.create();
  
  // Embed standard fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  // Colors
  const gold = rgb(0.83, 0.69, 0.22);
  const darkGold = rgb(0.55, 0.45, 0.15);
  const black = rgb(0.06, 0.06, 0.07);
  const white = rgb(1, 1, 1);
  const grayText = rgb(0.25, 0.25, 0.28);
  const lightBg = rgb(0.97, 0.97, 0.98);
  
  // Page 1: Cover Page
  const coverPage = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = coverPage.getSize();
  
  // Cover background
  coverPage.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: black,
  });
  
  // Gold accent bar top
  coverPage.drawRectangle({
    x: 0,
    y: height - 16,
    width,
    height: 16,
    color: gold,
  });
  
  // Header text
  coverPage.drawText('GLOBAL GENERATIONAL WEALTH', {
    x: 50,
    y: height - 70,
    size: 14,
    font: fontBold,
    color: gold,
  });
  
  coverPage.drawText('EXECUTIVE ADVISORY & FINANCIAL INTELLIGENCE', {
    x: 50,
    y: height - 88,
    size: 9,
    font: fontRegular,
    color: rgb(0.7, 0.7, 0.7),
  });
  
  // Gold line divider
  coverPage.drawLine({
    start: { x: 50, y: height - 105 },
    end: { x: width - 50, y: height - 105 },
    thickness: 1,
    color: darkGold,
  });
  
  // Edition badge
  coverPage.drawRectangle({
    x: 50,
    y: height - 210,
    width: 170,
    height: 28,
    color: rgb(0.15, 0.15, 0.17),
    borderColor: gold,
    borderWidth: 1,
  });
  
  coverPage.drawText(`OFFICIAL PUBLICATION • ${res.edition}`, {
    x: 60,
    y: height - 198,
    size: 8,
    font: fontBold,
    color: gold,
  });
  
  // Title (wrap if needed)
  coverPage.drawText(res.title, {
    x: 50,
    y: height - 260,
    size: 22,
    font: fontBold,
    color: white,
    maxWidth: width - 100,
    lineHeight: 28,
  });
  
  coverPage.drawText(res.subtitle, {
    x: 50,
    y: height - 340,
    size: 12,
    font: fontOblique,
    color: gold,
    maxWidth: width - 100,
    lineHeight: 18,
  });
  
  // Central decorative box
  coverPage.drawRectangle({
    x: 50,
    y: height - 600,
    width: width - 100,
    height: 220,
    color: rgb(0.1, 0.1, 0.12),
    borderColor: rgb(0.25, 0.25, 0.28),
    borderWidth: 1,
  });
  
  coverPage.drawText('KEY CHAPTERS & CORE DELIVERABLES', {
    x: 75,
    y: height - 420,
    size: 11,
    font: fontBold,
    color: gold,
  });
  
  let boxY = height - 450;
  for (const s of res.sections) {
    coverPage.drawText(`• ${s.heading}`, {
      x: 75,
      y: boxY,
      size: 10,
      font: fontRegular,
      color: white,
      maxWidth: width - 150,
    });
    boxY -= 32;
  }
  
  // Footer
  coverPage.drawText('CONFIDENTIAL & PROPRIETARY • FOR INTERNAL CLIENT USE ONLY', {
    x: 50,
    y: 70,
    size: 8,
    font: fontRegular,
    color: rgb(0.5, 0.5, 0.5),
  });
  coverPage.drawText('service@globalgenerationalwealth.net  |  www.globalgenerationalwealth.net', {
    x: 50,
    y: 52,
    size: 8,
    font: fontBold,
    color: gold,
  });
  
  // Page 2: Content Page
  const contentPage = pdfDoc.addPage([595.28, 841.89]);
  
  // Header
  contentPage.drawRectangle({
    x: 0,
    y: height - 45,
    width,
    height: 45,
    color: black,
  });
  contentPage.drawText('GLOBAL GENERATIONAL WEALTH — EXECUTIVE BRIEFING', {
    x: 50,
    y: height - 28,
    size: 9,
    font: fontBold,
    color: gold,
  });
  contentPage.drawText(res.edition, {
    x: width - 130,
    y: height - 28,
    size: 8,
    font: fontRegular,
    color: white,
  });
  
  // Sections
  let curY = height - 90;
  
  for (const sec of res.sections) {
    contentPage.drawText(sec.heading, {
      x: 50,
      y: curY,
      size: 13,
      font: fontBold,
      color: darkGold,
    });
    curY -= 20;
    
    // Draw body text
    contentPage.drawText(sec.body, {
      x: 50,
      y: curY,
      size: 10,
      font: fontRegular,
      color: black,
      maxWidth: width - 100,
      lineHeight: 15,
    });
    
    curY -= 105;
  }
  
  // Booking prompt at bottom
  contentPage.drawRectangle({
    x: 50,
    y: 60,
    width: width - 100,
    height: 75,
    color: rgb(0.95, 0.94, 0.88),
    borderColor: gold,
    borderWidth: 1,
  });
  
  contentPage.drawText('SCHEDULE YOUR PRIVATE INTRODUCTORY CONSULTATION', {
    x: 70,
    y: 115,
    size: 10,
    font: fontBold,
    color: darkGold,
  });
  contentPage.drawText('Book a direct 30-minute strategic consultation with our advisory team:', {
    x: 70,
    y: 98,
    size: 9,
    font: fontRegular,
    color: black,
  });
  contentPage.drawText('https://calendar.app.google/94T74SFZmhARq4xt9', {
    x: 70,
    y: 80,
    size: 9,
    font: fontBold,
    color: black,
  });
  
  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(publicResourcesDir, res.fileName);
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Generated: ${filePath}`);
}

async function main() {
  for (const res of resources) {
    await createResourcePdf(res);
  }
  console.log('All resource PDFs successfully created!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
